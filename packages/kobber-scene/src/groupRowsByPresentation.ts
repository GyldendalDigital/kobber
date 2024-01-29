import { RedapticContentBoxFill, RedapticRow } from "./types";

const fullWidthSections = ["sc-feature-header", "sc-card-carousel"];

type RowGroupPresentation = "normal" | "fullWidth" | "fullSize";

export interface RowGroup<CompleteRedapticRow extends RedapticRow> {
  presentation: RowGroupPresentation;
  rows: CompleteRedapticRow[];
  applyPaddingBottom: boolean;
}

export const groupRowsByPresentation = <
  CompleteRedapticRow extends RedapticRow,
>(
  rows: CompleteRedapticRow[],
  contentBoxFill: RedapticContentBoxFill,
) => {
  const groups: RowGroup<CompleteRedapticRow>[] = [];

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

const groupContainsOnly = (
  group: RowGroup<RedapticRow>,
  sectionName: string,
) => {
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
  row: RedapticRow,
  rows: RedapticRow[],
  contentBoxFill: RedapticContentBoxFill,
): RowGroupPresentation => {
  if (displaySectionInFullWidth(contentBoxFill, row)) return "fullWidth";
  if (displayDynamicContentInFullSize(contentBoxFill, row, rows))
    return "fullSize";
  if (displayDynamicContentInFullWidth(contentBoxFill, row)) return "fullWidth";
  return "normal";
};

const displayDynamicContentInFullSize = (
  contentBoxFill: RedapticContentBoxFill,
  row: RedapticRow,
  rows: RedapticRow[],
) => {
  return (
    displayDynamicContentInFullWidth(contentBoxFill, row) && rows.length === 1
  );
};

const displaySectionInFullWidth = (
  contentBoxFill: RedapticContentBoxFill,
  row: RedapticRow,
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
  contentBoxFill: RedapticContentBoxFill,
  row: RedapticRow,
) => {
  if (hasMultipleColumns(row)) return false;
  if (hasContentBoxFill(contentBoxFill)) return false;
  return row.columns[0]?.dynamicContentIds?.length > 0;
};

const hasMultipleColumns = (row: RedapticRow) => row.columns.length > 1;

const hasContentBoxFill = (contentBoxFill: RedapticContentBoxFill) => {
  return contentBoxFill !== RedapticContentBoxFill.None;
};
