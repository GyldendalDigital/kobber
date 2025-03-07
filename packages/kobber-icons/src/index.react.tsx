import { createComponent } from "@lit/react";
import * as React from "react";
 
import { Add } from "./icon/icons/add";
import { AddFigure } from "./icon/icons/add_figure";
import { AddSquare } from "./icon/icons/add_square";
import { AlarmBell } from "./icon/icons/alarm_bell";
import { AlarmClock } from "./icon/icons/alarm_clock";
import { AlarmTimer } from "./icon/icons/alarm_timer";
import { AnalyticBars } from "./icon/icons/analytic_bars";
import { ArrowBack } from "./icon/icons/arrow_back";
import { ArrowDown } from "./icon/icons/arrow_down";
import { ArrowLeft } from "./icon/icons/arrow_left";
import { ArrowRight } from "./icon/icons/arrow_right";
import { ArrowUp } from "./icon/icons/arrow_up";
import { Assets } from "./icon/icons/assets";
import { AudioRecording } from "./icon/icons/audio_recording";
import { Backspace } from "./icon/icons/backspace";
import { Banned } from "./icon/icons/banned";
import { Bincular } from "./icon/icons/bincular";
import { BookFlipPage } from "./icon/icons/book_flip_page";
import { BookOpen } from "./icon/icons/book_open";
import { Bookmark } from "./icon/icons/bookmark";
import { BulletList } from "./icon/icons/bullet_list";
import { Calendar } from "./icon/icons/calendar";
import { Camera } from "./icon/icons/camera";
import { Chat } from "./icon/icons/chat";
import { Check } from "./icon/icons/check";
import { CheckCircle } from "./icon/icons/check_circle";
import { Checklist } from "./icon/icons/checklist";
import { ChevronDown } from "./icon/icons/chevron_down";
import { ChevronUp } from "./icon/icons/chevron_up";
import { Circle } from "./icon/icons/circle";
import { CircleShapeAdd } from "./icon/icons/circle_shape_add";
import { Clock } from "./icon/icons/clock";
import { ClockHand } from "./icon/icons/clock_hand";
import { Close } from "./icon/icons/close";
import { ColorBrush } from "./icon/icons/color_brush";
import { CopyPaste } from "./icon/icons/copy_paste";
import { CursorPointer } from "./icon/icons/cursor_pointer";
import { CursorPointerCircle } from "./icon/icons/cursor_pointer_circle";
import { DeleteIcon } from "./icon/icons/delete_icon";
import { Dice } from "./icon/icons/dice";
import { Dictionary } from "./icon/icons/dictionary";
import { Download } from "./icon/icons/download";
import { DrawTablet } from "./icon/icons/draw_tablet";
import { Elements } from "./icon/icons/elements";
import { Envelope } from "./icon/icons/envelope";
import { Eraser } from "./icon/icons/eraser";
import { Expand } from "./icon/icons/expand";
import { ExpandResize } from "./icon/icons/expand_resize";
import { ExternalLink } from "./icon/icons/external_link";
import { ExternalLinkArrow } from "./icon/icons/external_link_arrow";
import { FemaleHeadset } from "./icon/icons/female_headset";
import { FilledCheckCircle } from "./icon/icons/filled_check_circle";
import { FilledInformationCircle } from "./icon/icons/filled_information_circle";
import { FilledWarningCircle } from "./icon/icons/filled_warning_circle";
import { FlipRight } from "./icon/icons/flip_right";
import { FolderBookmark } from "./icon/icons/folder_bookmark";
import { FontExpand } from "./icon/icons/font_expand";
import { FormChecked } from "./icon/icons/form_checked";
import { FormIndeterminate } from "./icon/icons/form_indeterminate";
import { FormTemplate } from "./icon/icons/form_template";
import { FrameExpand } from "./icon/icons/frame_expand";
import { FrameShrink } from "./icon/icons/frame_shrink";
import { GameController } from "./icon/icons/game_controller";
import { Glasses } from "./icon/icons/glasses";
import { GraphStats } from "./icon/icons/graph_stats";
import { Headphones } from "./icon/icons/headphones";
import { Heart } from "./icon/icons/heart";
import { Home } from "./icon/icons/home";
import { Hyperlink } from "./icon/icons/hyperlink";
import { Image } from "./icon/icons/image";
import { ImageFlower } from "./icon/icons/image_flower";
import { IndentDecrease } from "./icon/icons/indent_decrease";
import { IndentIncrease } from "./icon/icons/indent_increase";
import { Information } from "./icon/icons/information";
import { Keyboard } from "./icon/icons/keyboard";
import { Layers } from "./icon/icons/layers";
import { LayersBack } from "./icon/icons/layers_back";
import { LayoutLeft } from "./icon/icons/layout_left";
import { LayoutModule } from "./icon/icons/layout_module";
import { LayoutRight } from "./icon/icons/layout_right";
import { Library } from "./icon/icons/library";
import { LightBulb } from "./icon/icons/light_bulb";
import { LockLocked } from "./icon/icons/lock_locked";
import { LockUnlocked } from "./icon/icons/lock_unlocked";
import { Login } from "./icon/icons/login";
import { Logout } from "./icon/icons/logout";
import { Magnet } from "./icon/icons/magnet";
import { Menu } from "./icon/icons/menu";
import { Message } from "./icon/icons/message";
import { MessageQuestion } from "./icon/icons/message_question";
import { MessageStar } from "./icon/icons/message_star";
import { MessageTyping } from "./icon/icons/message_typing";
import { MessageWarning } from "./icon/icons/message_warning";
import { ModuleEdit } from "./icon/icons/module_edit";
import { ModuleFour } from "./icon/icons/module_four";
import { MultipleUsers } from "./icon/icons/multiple_users";
import { Newspaper } from "./icon/icons/newspaper";
import { NotebookPencil } from "./icon/icons/notebook_pencil";
import { NumberList } from "./icon/icons/number_list";
import { Option } from "./icon/icons/option";
import { Palette } from "./icon/icons/palette";
import { Paragraph } from "./icon/icons/paragraph";
import { ParagraphCenter } from "./icon/icons/paragraph_center";
import { ParagraphLeft } from "./icon/icons/paragraph_left";
import { ParagraphRight } from "./icon/icons/paragraph_right";
import { PartyBalloon } from "./icon/icons/party_balloon";
import { Pause } from "./icon/icons/pause";
import { PenTools } from "./icon/icons/pen_tools";
import { PenWrite } from "./icon/icons/pen_write";
import { Pencil } from "./icon/icons/pencil";
import { Pin } from "./icon/icons/pin";
import { PinRemove } from "./icon/icons/pin_remove";
import { Play } from "./icon/icons/play";
import { Printer } from "./icon/icons/printer";
import { QuestionCircle } from "./icon/icons/question_circle";
import { RankingStar } from "./icon/icons/ranking_star";
import { RatingStarCheck } from "./icon/icons/rating_star_check";
import { Read } from "./icon/icons/read";
import { ReadHome } from "./icon/icons/read_home";
import { ReadIdea } from "./icon/icons/read_idea";
import { Redo } from "./icon/icons/redo";
import { Refresh } from "./icon/icons/refresh";
import { Reload } from "./icon/icons/reload";
import { Remove } from "./icon/icons/remove";
import { RetouchGraph } from "./icon/icons/retouch_graph";
import { RibbonStar } from "./icon/icons/ribbon_star";
import { Rocket } from "./icon/icons/rocket";
import { SchoolTeacher } from "./icon/icons/school_teacher";
import { Search } from "./icon/icons/search";
import { Settings } from "./icon/icons/settings";
import { SettingsSlider } from "./icon/icons/settings_slider";
import { Share } from "./icon/icons/share";
import { Shrink } from "./icon/icons/shrink";
import { Shuffle } from "./icon/icons/shuffle";
import { SocialInstagram } from "./icon/icons/social_instagram";
import { StudyMath } from "./icon/icons/study_math";
import { Subscript } from "./icon/icons/subscript";
import { Subtract } from "./icon/icons/subtract";
import { Superscript } from "./icon/icons/superscript";
import { SynchronizeArrowsSquare } from "./icon/icons/synchronize__arrows__square";
import { SynchronizeArrowClock } from "./icon/icons/synchronize_arrow_clock";
import { SynchronizeArrowsWarning } from "./icon/icons/synchronize_arrows_warning";
import { TabletTouch } from "./icon/icons/tablet_touch";
import { TaskList } from "./icon/icons/task_list";
import { TaskListClock } from "./icon/icons/task_list_clock";
import { TeacherCorrect } from "./icon/icons/teacher_correct";
import { TextBold } from "./icon/icons/text_bold";
import { TextFormat } from "./icon/icons/text_format";
import { TextItalic } from "./icon/icons/text_italic";
import { TextStyle } from "./icon/icons/text_style";
import { TextSync } from "./icon/icons/text_sync";
import { TextUnderline } from "./icon/icons/text_underline";
import { Transfer } from "./icon/icons/transfer";
import { Undo } from "./icon/icons/undo";
import { User } from "./icon/icons/user";
import { UserEdit } from "./icon/icons/user_edit";
import { UserQuestion } from "./icon/icons/user_question";
import { Users } from "./icon/icons/users";
import { VideoFileAdd } from "./icon/icons/video_file_add";
import { VideoPlayer } from "./icon/icons/video_player";
import { View } from "./icon/icons/view";
import { ViewOff } from "./icon/icons/view_off";
import { VolumeOff } from "./icon/icons/volume_off";
import { VolumeOn } from "./icon/icons/volume_on";
import { Warning } from "./icon/icons/warning";
import { Youtube } from "./icon/icons/youtube"; 

export const IconAdd = createComponent({
	tagName: "icon-add",
	elementClass: Add,
	react: React,
});

export const IconAddFigure = createComponent({
	tagName: "icon-add_figure",
	elementClass: AddFigure,
	react: React,
});

export const IconAddSquare = createComponent({
	tagName: "icon-add_square",
	elementClass: AddSquare,
	react: React,
});

export const IconAlarmBell = createComponent({
	tagName: "icon-alarm_bell",
	elementClass: AlarmBell,
	react: React,
});

export const IconAlarmClock = createComponent({
	tagName: "icon-alarm_clock",
	elementClass: AlarmClock,
	react: React,
});

export const IconAlarmTimer = createComponent({
	tagName: "icon-alarm_timer",
	elementClass: AlarmTimer,
	react: React,
});

export const IconAnalyticBars = createComponent({
	tagName: "icon-analytic_bars",
	elementClass: AnalyticBars,
	react: React,
});

export const IconArrowBack = createComponent({
	tagName: "icon-arrow_back",
	elementClass: ArrowBack,
	react: React,
});

export const IconArrowDown = createComponent({
	tagName: "icon-arrow_down",
	elementClass: ArrowDown,
	react: React,
});

export const IconArrowLeft = createComponent({
	tagName: "icon-arrow_left",
	elementClass: ArrowLeft,
	react: React,
});

export const IconArrowRight = createComponent({
	tagName: "icon-arrow_right",
	elementClass: ArrowRight,
	react: React,
});

export const IconArrowUp = createComponent({
	tagName: "icon-arrow_up",
	elementClass: ArrowUp,
	react: React,
});

export const IconAssets = createComponent({
	tagName: "icon-assets",
	elementClass: Assets,
	react: React,
});

export const IconAudioRecording = createComponent({
	tagName: "icon-audio_recording",
	elementClass: AudioRecording,
	react: React,
});

export const IconBackspace = createComponent({
	tagName: "icon-backspace",
	elementClass: Backspace,
	react: React,
});

export const IconBanned = createComponent({
	tagName: "icon-banned",
	elementClass: Banned,
	react: React,
});

export const IconBincular = createComponent({
	tagName: "icon-bincular",
	elementClass: Bincular,
	react: React,
});

export const IconBookFlipPage = createComponent({
	tagName: "icon-book_flip_page",
	elementClass: BookFlipPage,
	react: React,
});

export const IconBookOpen = createComponent({
	tagName: "icon-book_open",
	elementClass: BookOpen,
	react: React,
});

export const IconBookmark = createComponent({
	tagName: "icon-bookmark",
	elementClass: Bookmark,
	react: React,
});

export const IconBulletList = createComponent({
	tagName: "icon-bullet_list",
	elementClass: BulletList,
	react: React,
});

export const IconCalendar = createComponent({
	tagName: "icon-calendar",
	elementClass: Calendar,
	react: React,
});

export const IconCamera = createComponent({
	tagName: "icon-camera",
	elementClass: Camera,
	react: React,
});

export const IconChat = createComponent({
	tagName: "icon-chat",
	elementClass: Chat,
	react: React,
});

export const IconCheck = createComponent({
	tagName: "icon-check",
	elementClass: Check,
	react: React,
});

export const IconCheckCircle = createComponent({
	tagName: "icon-check_circle",
	elementClass: CheckCircle,
	react: React,
});

export const IconChecklist = createComponent({
	tagName: "icon-checklist",
	elementClass: Checklist,
	react: React,
});

export const IconChevronDown = createComponent({
	tagName: "icon-chevron_down",
	elementClass: ChevronDown,
	react: React,
});

export const IconChevronUp = createComponent({
	tagName: "icon-chevron_up",
	elementClass: ChevronUp,
	react: React,
});

export const IconCircle = createComponent({
	tagName: "icon-circle",
	elementClass: Circle,
	react: React,
});

export const IconCircleShapeAdd = createComponent({
	tagName: "icon-circle_shape_add",
	elementClass: CircleShapeAdd,
	react: React,
});

export const IconClock = createComponent({
	tagName: "icon-clock",
	elementClass: Clock,
	react: React,
});

export const IconClockHand = createComponent({
	tagName: "icon-clock_hand",
	elementClass: ClockHand,
	react: React,
});

export const IconClose = createComponent({
	tagName: "icon-close",
	elementClass: Close,
	react: React,
});

export const IconColorBrush = createComponent({
	tagName: "icon-color_brush",
	elementClass: ColorBrush,
	react: React,
});

export const IconCopyPaste = createComponent({
	tagName: "icon-copy_paste",
	elementClass: CopyPaste,
	react: React,
});

export const IconCursorPointer = createComponent({
	tagName: "icon-cursor_pointer",
	elementClass: CursorPointer,
	react: React,
});

export const IconCursorPointerCircle = createComponent({
	tagName: "icon-cursor_pointer_circle",
	elementClass: CursorPointerCircle,
	react: React,
});

export const IconDeleteIcon = createComponent({
	tagName: "icon-delete_icon",
	elementClass: DeleteIcon,
	react: React,
});

export const IconDice = createComponent({
	tagName: "icon-dice",
	elementClass: Dice,
	react: React,
});

export const IconDictionary = createComponent({
	tagName: "icon-dictionary",
	elementClass: Dictionary,
	react: React,
});

export const IconDownload = createComponent({
	tagName: "icon-download",
	elementClass: Download,
	react: React,
});

export const IconDrawTablet = createComponent({
	tagName: "icon-draw_tablet",
	elementClass: DrawTablet,
	react: React,
});

export const IconElements = createComponent({
	tagName: "icon-elements",
	elementClass: Elements,
	react: React,
});

export const IconEnvelope = createComponent({
	tagName: "icon-envelope",
	elementClass: Envelope,
	react: React,
});

export const IconEraser = createComponent({
	tagName: "icon-eraser",
	elementClass: Eraser,
	react: React,
});

export const IconExpand = createComponent({
	tagName: "icon-expand",
	elementClass: Expand,
	react: React,
});

export const IconExpandResize = createComponent({
	tagName: "icon-expand_resize",
	elementClass: ExpandResize,
	react: React,
});

export const IconExternalLink = createComponent({
	tagName: "icon-external_link",
	elementClass: ExternalLink,
	react: React,
});

export const IconExternalLinkArrow = createComponent({
	tagName: "icon-external_link_arrow",
	elementClass: ExternalLinkArrow,
	react: React,
});

export const IconFemaleHeadset = createComponent({
	tagName: "icon-female_headset",
	elementClass: FemaleHeadset,
	react: React,
});

export const IconFilledCheckCircle = createComponent({
	tagName: "icon-filled_check_circle",
	elementClass: FilledCheckCircle,
	react: React,
});

export const IconFilledInformationCircle = createComponent({
	tagName: "icon-filled_information_circle",
	elementClass: FilledInformationCircle,
	react: React,
});

export const IconFilledWarningCircle = createComponent({
	tagName: "icon-filled_warning_circle",
	elementClass: FilledWarningCircle,
	react: React,
});

export const IconFlipRight = createComponent({
	tagName: "icon-flip_right",
	elementClass: FlipRight,
	react: React,
});

export const IconFolderBookmark = createComponent({
	tagName: "icon-folder_bookmark",
	elementClass: FolderBookmark,
	react: React,
});

export const IconFontExpand = createComponent({
	tagName: "icon-font_expand",
	elementClass: FontExpand,
	react: React,
});

export const IconFormChecked = createComponent({
	tagName: "icon-form_checked",
	elementClass: FormChecked,
	react: React,
});

export const IconFormIndeterminate = createComponent({
	tagName: "icon-form_indeterminate",
	elementClass: FormIndeterminate,
	react: React,
});

export const IconFormTemplate = createComponent({
	tagName: "icon-form_template",
	elementClass: FormTemplate,
	react: React,
});

export const IconFrameExpand = createComponent({
	tagName: "icon-frame_expand",
	elementClass: FrameExpand,
	react: React,
});

export const IconFrameShrink = createComponent({
	tagName: "icon-frame_shrink",
	elementClass: FrameShrink,
	react: React,
});

export const IconGameController = createComponent({
	tagName: "icon-game_controller",
	elementClass: GameController,
	react: React,
});

export const IconGlasses = createComponent({
	tagName: "icon-glasses",
	elementClass: Glasses,
	react: React,
});

export const IconGraphStats = createComponent({
	tagName: "icon-graph_stats",
	elementClass: GraphStats,
	react: React,
});

export const IconHeadphones = createComponent({
	tagName: "icon-headphones",
	elementClass: Headphones,
	react: React,
});

export const IconHeart = createComponent({
	tagName: "icon-heart",
	elementClass: Heart,
	react: React,
});

export const IconHome = createComponent({
	tagName: "icon-home",
	elementClass: Home,
	react: React,
});

export const IconHyperlink = createComponent({
	tagName: "icon-hyperlink",
	elementClass: Hyperlink,
	react: React,
});

export const IconImage = createComponent({
	tagName: "icon-image",
	elementClass: Image,
	react: React,
});

export const IconImageFlower = createComponent({
	tagName: "icon-image_flower",
	elementClass: ImageFlower,
	react: React,
});

export const IconIndentDecrease = createComponent({
	tagName: "icon-indent_decrease",
	elementClass: IndentDecrease,
	react: React,
});

export const IconIndentIncrease = createComponent({
	tagName: "icon-indent_increase",
	elementClass: IndentIncrease,
	react: React,
});

export const IconInformation = createComponent({
	tagName: "icon-information",
	elementClass: Information,
	react: React,
});

export const IconKeyboard = createComponent({
	tagName: "icon-keyboard",
	elementClass: Keyboard,
	react: React,
});

export const IconLayers = createComponent({
	tagName: "icon-layers",
	elementClass: Layers,
	react: React,
});

export const IconLayersBack = createComponent({
	tagName: "icon-layers_back",
	elementClass: LayersBack,
	react: React,
});

export const IconLayoutLeft = createComponent({
	tagName: "icon-layout_left",
	elementClass: LayoutLeft,
	react: React,
});

export const IconLayoutModule = createComponent({
	tagName: "icon-layout_module",
	elementClass: LayoutModule,
	react: React,
});

export const IconLayoutRight = createComponent({
	tagName: "icon-layout_right",
	elementClass: LayoutRight,
	react: React,
});

export const IconLibrary = createComponent({
	tagName: "icon-library",
	elementClass: Library,
	react: React,
});

export const IconLightBulb = createComponent({
	tagName: "icon-light_bulb",
	elementClass: LightBulb,
	react: React,
});

export const IconLockLocked = createComponent({
	tagName: "icon-lock_locked",
	elementClass: LockLocked,
	react: React,
});

export const IconLockUnlocked = createComponent({
	tagName: "icon-lock_unlocked",
	elementClass: LockUnlocked,
	react: React,
});

export const IconLogin = createComponent({
	tagName: "icon-login",
	elementClass: Login,
	react: React,
});

export const IconLogout = createComponent({
	tagName: "icon-logout",
	elementClass: Logout,
	react: React,
});

export const IconMagnet = createComponent({
	tagName: "icon-magnet",
	elementClass: Magnet,
	react: React,
});

export const IconMenu = createComponent({
	tagName: "icon-menu",
	elementClass: Menu,
	react: React,
});

export const IconMessage = createComponent({
	tagName: "icon-message",
	elementClass: Message,
	react: React,
});

export const IconMessageQuestion = createComponent({
	tagName: "icon-message_question",
	elementClass: MessageQuestion,
	react: React,
});

export const IconMessageStar = createComponent({
	tagName: "icon-message_star",
	elementClass: MessageStar,
	react: React,
});

export const IconMessageTyping = createComponent({
	tagName: "icon-message_typing",
	elementClass: MessageTyping,
	react: React,
});

export const IconMessageWarning = createComponent({
	tagName: "icon-message_warning",
	elementClass: MessageWarning,
	react: React,
});

export const IconModuleEdit = createComponent({
	tagName: "icon-module_edit",
	elementClass: ModuleEdit,
	react: React,
});

export const IconModuleFour = createComponent({
	tagName: "icon-module_four",
	elementClass: ModuleFour,
	react: React,
});

export const IconMultipleUsers = createComponent({
	tagName: "icon-multiple_users",
	elementClass: MultipleUsers,
	react: React,
});

export const IconNewspaper = createComponent({
	tagName: "icon-newspaper",
	elementClass: Newspaper,
	react: React,
});

export const IconNotebookPencil = createComponent({
	tagName: "icon-notebook_pencil",
	elementClass: NotebookPencil,
	react: React,
});

export const IconNumberList = createComponent({
	tagName: "icon-number_list",
	elementClass: NumberList,
	react: React,
});

export const IconOption = createComponent({
	tagName: "icon-option",
	elementClass: Option,
	react: React,
});

export const IconPalette = createComponent({
	tagName: "icon-palette",
	elementClass: Palette,
	react: React,
});

export const IconParagraph = createComponent({
	tagName: "icon-paragraph",
	elementClass: Paragraph,
	react: React,
});

export const IconParagraphCenter = createComponent({
	tagName: "icon-paragraph_center",
	elementClass: ParagraphCenter,
	react: React,
});

export const IconParagraphLeft = createComponent({
	tagName: "icon-paragraph_left",
	elementClass: ParagraphLeft,
	react: React,
});

export const IconParagraphRight = createComponent({
	tagName: "icon-paragraph_right",
	elementClass: ParagraphRight,
	react: React,
});

export const IconPartyBalloon = createComponent({
	tagName: "icon-party_balloon",
	elementClass: PartyBalloon,
	react: React,
});

export const IconPause = createComponent({
	tagName: "icon-pause",
	elementClass: Pause,
	react: React,
});

export const IconPenTools = createComponent({
	tagName: "icon-pen_tools",
	elementClass: PenTools,
	react: React,
});

export const IconPenWrite = createComponent({
	tagName: "icon-pen_write",
	elementClass: PenWrite,
	react: React,
});

export const IconPencil = createComponent({
	tagName: "icon-pencil",
	elementClass: Pencil,
	react: React,
});

export const IconPin = createComponent({
	tagName: "icon-pin",
	elementClass: Pin,
	react: React,
});

export const IconPinRemove = createComponent({
	tagName: "icon-pin_remove",
	elementClass: PinRemove,
	react: React,
});

export const IconPlay = createComponent({
	tagName: "icon-play",
	elementClass: Play,
	react: React,
});

export const IconPrinter = createComponent({
	tagName: "icon-printer",
	elementClass: Printer,
	react: React,
});

export const IconQuestionCircle = createComponent({
	tagName: "icon-question_circle",
	elementClass: QuestionCircle,
	react: React,
});

export const IconRankingStar = createComponent({
	tagName: "icon-ranking_star",
	elementClass: RankingStar,
	react: React,
});

export const IconRatingStarCheck = createComponent({
	tagName: "icon-rating_star_check",
	elementClass: RatingStarCheck,
	react: React,
});

export const IconRead = createComponent({
	tagName: "icon-read",
	elementClass: Read,
	react: React,
});

export const IconReadHome = createComponent({
	tagName: "icon-read_home",
	elementClass: ReadHome,
	react: React,
});

export const IconReadIdea = createComponent({
	tagName: "icon-read_idea",
	elementClass: ReadIdea,
	react: React,
});

export const IconRedo = createComponent({
	tagName: "icon-redo",
	elementClass: Redo,
	react: React,
});

export const IconRefresh = createComponent({
	tagName: "icon-refresh",
	elementClass: Refresh,
	react: React,
});

export const IconReload = createComponent({
	tagName: "icon-reload",
	elementClass: Reload,
	react: React,
});

export const IconRemove = createComponent({
	tagName: "icon-remove",
	elementClass: Remove,
	react: React,
});

export const IconRetouchGraph = createComponent({
	tagName: "icon-retouch_graph",
	elementClass: RetouchGraph,
	react: React,
});

export const IconRibbonStar = createComponent({
	tagName: "icon-ribbon_star",
	elementClass: RibbonStar,
	react: React,
});

export const IconRocket = createComponent({
	tagName: "icon-rocket",
	elementClass: Rocket,
	react: React,
});

export const IconSchoolTeacher = createComponent({
	tagName: "icon-school_teacher",
	elementClass: SchoolTeacher,
	react: React,
});

export const IconSearch = createComponent({
	tagName: "icon-search",
	elementClass: Search,
	react: React,
});

export const IconSettings = createComponent({
	tagName: "icon-settings",
	elementClass: Settings,
	react: React,
});

export const IconSettingsSlider = createComponent({
	tagName: "icon-settings_slider",
	elementClass: SettingsSlider,
	react: React,
});

export const IconShare = createComponent({
	tagName: "icon-share",
	elementClass: Share,
	react: React,
});

export const IconShrink = createComponent({
	tagName: "icon-shrink",
	elementClass: Shrink,
	react: React,
});

export const IconShuffle = createComponent({
	tagName: "icon-shuffle",
	elementClass: Shuffle,
	react: React,
});

export const IconSocialInstagram = createComponent({
	tagName: "icon-social_instagram",
	elementClass: SocialInstagram,
	react: React,
});

export const IconStudyMath = createComponent({
	tagName: "icon-study_math",
	elementClass: StudyMath,
	react: React,
});

export const IconSubscript = createComponent({
	tagName: "icon-subscript",
	elementClass: Subscript,
	react: React,
});

export const IconSubtract = createComponent({
	tagName: "icon-subtract",
	elementClass: Subtract,
	react: React,
});

export const IconSuperscript = createComponent({
	tagName: "icon-superscript",
	elementClass: Superscript,
	react: React,
});

export const IconSynchronizeArrowsSquare = createComponent({
	tagName: "icon-synchronize__arrows__square",
	elementClass: SynchronizeArrowsSquare,
	react: React,
});

export const IconSynchronizeArrowClock = createComponent({
	tagName: "icon-synchronize_arrow_clock",
	elementClass: SynchronizeArrowClock,
	react: React,
});

export const IconSynchronizeArrowsWarning = createComponent({
	tagName: "icon-synchronize_arrows_warning",
	elementClass: SynchronizeArrowsWarning,
	react: React,
});

export const IconTabletTouch = createComponent({
	tagName: "icon-tablet_touch",
	elementClass: TabletTouch,
	react: React,
});

export const IconTaskList = createComponent({
	tagName: "icon-task_list",
	elementClass: TaskList,
	react: React,
});

export const IconTaskListClock = createComponent({
	tagName: "icon-task_list_clock",
	elementClass: TaskListClock,
	react: React,
});

export const IconTeacherCorrect = createComponent({
	tagName: "icon-teacher_correct",
	elementClass: TeacherCorrect,
	react: React,
});

export const IconTextBold = createComponent({
	tagName: "icon-text_bold",
	elementClass: TextBold,
	react: React,
});

export const IconTextFormat = createComponent({
	tagName: "icon-text_format",
	elementClass: TextFormat,
	react: React,
});

export const IconTextItalic = createComponent({
	tagName: "icon-text_italic",
	elementClass: TextItalic,
	react: React,
});

export const IconTextStyle = createComponent({
	tagName: "icon-text_style",
	elementClass: TextStyle,
	react: React,
});

export const IconTextSync = createComponent({
	tagName: "icon-text_sync",
	elementClass: TextSync,
	react: React,
});

export const IconTextUnderline = createComponent({
	tagName: "icon-text_underline",
	elementClass: TextUnderline,
	react: React,
});

export const IconTransfer = createComponent({
	tagName: "icon-transfer",
	elementClass: Transfer,
	react: React,
});

export const IconUndo = createComponent({
	tagName: "icon-undo",
	elementClass: Undo,
	react: React,
});

export const IconUser = createComponent({
	tagName: "icon-user",
	elementClass: User,
	react: React,
});

export const IconUserEdit = createComponent({
	tagName: "icon-user_edit",
	elementClass: UserEdit,
	react: React,
});

export const IconUserQuestion = createComponent({
	tagName: "icon-user_question",
	elementClass: UserQuestion,
	react: React,
});

export const IconUsers = createComponent({
	tagName: "icon-users",
	elementClass: Users,
	react: React,
});

export const IconVideoFileAdd = createComponent({
	tagName: "icon-video_file_add",
	elementClass: VideoFileAdd,
	react: React,
});

export const IconVideoPlayer = createComponent({
	tagName: "icon-video_player",
	elementClass: VideoPlayer,
	react: React,
});

export const IconView = createComponent({
	tagName: "icon-view",
	elementClass: View,
	react: React,
});

export const IconViewOff = createComponent({
	tagName: "icon-view_off",
	elementClass: ViewOff,
	react: React,
});

export const IconVolumeOff = createComponent({
	tagName: "icon-volume_off",
	elementClass: VolumeOff,
	react: React,
});

export const IconVolumeOn = createComponent({
	tagName: "icon-volume_on",
	elementClass: VolumeOn,
	react: React,
});

export const IconWarning = createComponent({
	tagName: "icon-warning",
	elementClass: Warning,
	react: React,
});

export const IconYoutube = createComponent({
	tagName: "icon-youtube",
	elementClass: Youtube,
	react: React,
});
