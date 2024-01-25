import { ActivityContentBoxFill, ActivityRow, SectionElement } from "./types";

const fullWidthSections = [
  SectionElement.FeatureHeader,
  SectionElement.CardCarousel,
];

type RowGroupPresentation = "normal" | "fullWidth" | "fullSize";

export interface RowGroup {
  presentation: RowGroupPresentation;
  rows: ActivityRow[];
  applyPaddingBottom: boolean;
}

export const groupRowsByPresentation = (
  rows: ActivityRow[],
  contentBoxFill: ActivityContentBoxFill,
) => {
  const groups: RowGroup[] = [];

  rows.forEach((row, rowIndex) => {
    const presentation = getRowPresentation(row, rows, contentBoxFill);
    const currentGroup = rowIndex === 0 ? undefined : groups[groups.length - 1];
    if (!currentGroup || currentGroup.presentation !== presentation) {
      groups.push({ presentation, rows: [row], applyPaddingBottom: true });
    } else {
      currentGroup.rows.push(row);
    }
  });

  return groups.map((group, index) => {
    const isFirstGroup = index === 0;
    const applyPaddingBottom =
      !isFirstGroup && !groupContainsOnly(group, "sc-feature-header");
    return { ...group, applyPaddingBottom };
  });
};

const groupContainsOnly = (group: RowGroup, sectionName: string) => {
  const sectionNames = group.rows.reduce<string[]>((sectionNames, row) => {
    row.columns.forEach((column) => {
      column.activitySections.forEach((activitySection) => {
        if (!sectionNames.includes(activitySection.element)) {
          sectionNames.push(activitySection.element);
        }
      });
    });
    return sectionNames;
  }, []);
  return sectionNames.length === 1 && sectionNames[0] === sectionName;
};

const getRowPresentation = (
  row: ActivityRow,
  rows: ActivityRow[],
  contentBoxFill: ActivityContentBoxFill,
): RowGroupPresentation => {
  if (displaySectionInFullWidth(contentBoxFill, row)) return "fullWidth";
  if (displayDynamicContentInFullSize(contentBoxFill, row, rows))
    return "fullSize";
  if (displayDynamicContentInFullWidth(contentBoxFill, row)) return "fullWidth";
  return "normal";
};

const displayDynamicContentInFullSize = (
  contentBoxFill: ActivityContentBoxFill,
  row: ActivityRow,
  rows: ActivityRow[],
) => {
  return (
    displayDynamicContentInFullWidth(contentBoxFill, row) && rows.length === 1
  );
};

const displaySectionInFullWidth = (
  contentBoxFill: ActivityContentBoxFill,
  row: ActivityRow,
) => {
  if (hasMultipleColumns(row)) return false;
  if (hasContentBoxFill(contentBoxFill)) return false;
  const activitySectionsInRow = row.columns[0]?.activitySections;
  return activitySectionsInRow.some((activitySection) =>
    fullWidthSections.some(
      (fullWidthSection) => activitySection.element === fullWidthSection,
    ),
  );
};

const displayDynamicContentInFullWidth = (
  contentBoxFill: ActivityContentBoxFill,
  row: ActivityRow,
) => {
  if (hasMultipleColumns(row)) return false;
  if (hasContentBoxFill(contentBoxFill)) return false;
  return row.columns[0]?.dynamicContentIds?.length > 0;
};

const hasMultipleColumns = (row: ActivityRow) => row.columns.length > 1;

const hasContentBoxFill = (contentBoxFill: ActivityContentBoxFill) => {
  return contentBoxFill !== ActivityContentBoxFill.None;
};
