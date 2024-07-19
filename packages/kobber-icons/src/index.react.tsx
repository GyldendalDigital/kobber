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
import { FemaleHeadset } from "./icon/icons/female_headset";
import { FlipRight } from "./icon/icons/flip_right";
import { FolderBookmark } from "./icon/icons/folder_bookmark";
import { FontExpand } from "./icon/icons/font_expand";
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

export const KobberAdd = createComponent({
	tagName: "kobber-add",
	elementClass: Add,
	react: React,
});

export const KobberAddFigure = createComponent({
	tagName: "kobber-add_figure",
	elementClass: AddFigure,
	react: React,
});

export const KobberAddSquare = createComponent({
	tagName: "kobber-add_square",
	elementClass: AddSquare,
	react: React,
});

export const KobberAlarmBell = createComponent({
	tagName: "kobber-alarm_bell",
	elementClass: AlarmBell,
	react: React,
});

export const KobberAlarmClock = createComponent({
	tagName: "kobber-alarm_clock",
	elementClass: AlarmClock,
	react: React,
});

export const KobberAlarmTimer = createComponent({
	tagName: "kobber-alarm_timer",
	elementClass: AlarmTimer,
	react: React,
});

export const KobberAnalyticBars = createComponent({
	tagName: "kobber-analytic_bars",
	elementClass: AnalyticBars,
	react: React,
});

export const KobberArrowBack = createComponent({
	tagName: "kobber-arrow_back",
	elementClass: ArrowBack,
	react: React,
});

export const KobberArrowDown = createComponent({
	tagName: "kobber-arrow_down",
	elementClass: ArrowDown,
	react: React,
});

export const KobberArrowLeft = createComponent({
	tagName: "kobber-arrow_left",
	elementClass: ArrowLeft,
	react: React,
});

export const KobberArrowRight = createComponent({
	tagName: "kobber-arrow_right",
	elementClass: ArrowRight,
	react: React,
});

export const KobberArrowUp = createComponent({
	tagName: "kobber-arrow_up",
	elementClass: ArrowUp,
	react: React,
});

export const KobberAssets = createComponent({
	tagName: "kobber-assets",
	elementClass: Assets,
	react: React,
});

export const KobberAudioRecording = createComponent({
	tagName: "kobber-audio_recording",
	elementClass: AudioRecording,
	react: React,
});

export const KobberBackspace = createComponent({
	tagName: "kobber-backspace",
	elementClass: Backspace,
	react: React,
});

export const KobberBanned = createComponent({
	tagName: "kobber-banned",
	elementClass: Banned,
	react: React,
});

export const KobberBincular = createComponent({
	tagName: "kobber-bincular",
	elementClass: Bincular,
	react: React,
});

export const KobberBookOpen = createComponent({
	tagName: "kobber-book_open",
	elementClass: BookOpen,
	react: React,
});

export const KobberBookmark = createComponent({
	tagName: "kobber-bookmark",
	elementClass: Bookmark,
	react: React,
});

export const KobberBulletList = createComponent({
	tagName: "kobber-bullet_list",
	elementClass: BulletList,
	react: React,
});

export const KobberCalendar = createComponent({
	tagName: "kobber-calendar",
	elementClass: Calendar,
	react: React,
});

export const KobberCamera = createComponent({
	tagName: "kobber-camera",
	elementClass: Camera,
	react: React,
});

export const KobberChat = createComponent({
	tagName: "kobber-chat",
	elementClass: Chat,
	react: React,
});

export const KobberCheck = createComponent({
	tagName: "kobber-check",
	elementClass: Check,
	react: React,
});

export const KobberCheckCircle = createComponent({
	tagName: "kobber-check_circle",
	elementClass: CheckCircle,
	react: React,
});

export const KobberChecklist = createComponent({
	tagName: "kobber-checklist",
	elementClass: Checklist,
	react: React,
});

export const KobberChevronDown = createComponent({
	tagName: "kobber-chevron_down",
	elementClass: ChevronDown,
	react: React,
});

export const KobberChevronUp = createComponent({
	tagName: "kobber-chevron_up",
	elementClass: ChevronUp,
	react: React,
});

export const KobberCircle = createComponent({
	tagName: "kobber-circle",
	elementClass: Circle,
	react: React,
});

export const KobberCircleShapeAdd = createComponent({
	tagName: "kobber-circle_shape_add",
	elementClass: CircleShapeAdd,
	react: React,
});

export const KobberClock = createComponent({
	tagName: "kobber-clock",
	elementClass: Clock,
	react: React,
});

export const KobberClockHand = createComponent({
	tagName: "kobber-clock_hand",
	elementClass: ClockHand,
	react: React,
});

export const KobberClose = createComponent({
	tagName: "kobber-close",
	elementClass: Close,
	react: React,
});

export const KobberColorBrush = createComponent({
	tagName: "kobber-color_brush",
	elementClass: ColorBrush,
	react: React,
});

export const KobberCopyPaste = createComponent({
	tagName: "kobber-copy_paste",
	elementClass: CopyPaste,
	react: React,
});

export const KobberCursorPointer = createComponent({
	tagName: "kobber-cursor_pointer",
	elementClass: CursorPointer,
	react: React,
});

export const KobberCursorPointerCircle = createComponent({
	tagName: "kobber-cursor_pointer_circle",
	elementClass: CursorPointerCircle,
	react: React,
});

export const KobberDeleteIcon = createComponent({
	tagName: "kobber-delete_icon",
	elementClass: DeleteIcon,
	react: React,
});

export const KobberDice = createComponent({
	tagName: "kobber-dice",
	elementClass: Dice,
	react: React,
});

export const KobberDictionary = createComponent({
	tagName: "kobber-dictionary",
	elementClass: Dictionary,
	react: React,
});

export const KobberDownload = createComponent({
	tagName: "kobber-download",
	elementClass: Download,
	react: React,
});

export const KobberDrawTablet = createComponent({
	tagName: "kobber-draw_tablet",
	elementClass: DrawTablet,
	react: React,
});

export const KobberElements = createComponent({
	tagName: "kobber-elements",
	elementClass: Elements,
	react: React,
});

export const KobberEnvelope = createComponent({
	tagName: "kobber-envelope",
	elementClass: Envelope,
	react: React,
});

export const KobberEraser = createComponent({
	tagName: "kobber-eraser",
	elementClass: Eraser,
	react: React,
});

export const KobberExpand = createComponent({
	tagName: "kobber-expand",
	elementClass: Expand,
	react: React,
});

export const KobberExpandResize = createComponent({
	tagName: "kobber-expand_resize",
	elementClass: ExpandResize,
	react: React,
});

export const KobberExternalLink = createComponent({
	tagName: "kobber-external_link",
	elementClass: ExternalLink,
	react: React,
});

export const KobberFemaleHeadset = createComponent({
	tagName: "kobber-female_headset",
	elementClass: FemaleHeadset,
	react: React,
});

export const KobberFlipRight = createComponent({
	tagName: "kobber-flip_right",
	elementClass: FlipRight,
	react: React,
});

export const KobberFolderBookmark = createComponent({
	tagName: "kobber-folder_bookmark",
	elementClass: FolderBookmark,
	react: React,
});

export const KobberFontExpand = createComponent({
	tagName: "kobber-font_expand",
	elementClass: FontExpand,
	react: React,
});

export const KobberFormTemplate = createComponent({
	tagName: "kobber-form_template",
	elementClass: FormTemplate,
	react: React,
});

export const KobberFrameExpand = createComponent({
	tagName: "kobber-frame_expand",
	elementClass: FrameExpand,
	react: React,
});

export const KobberFrameShrink = createComponent({
	tagName: "kobber-frame_shrink",
	elementClass: FrameShrink,
	react: React,
});

export const KobberGameController = createComponent({
	tagName: "kobber-game_controller",
	elementClass: GameController,
	react: React,
});

export const KobberGlasses = createComponent({
	tagName: "kobber-glasses",
	elementClass: Glasses,
	react: React,
});

export const KobberGraphStats = createComponent({
	tagName: "kobber-graph_stats",
	elementClass: GraphStats,
	react: React,
});

export const KobberHeadphones = createComponent({
	tagName: "kobber-headphones",
	elementClass: Headphones,
	react: React,
});

export const KobberHeart = createComponent({
	tagName: "kobber-heart",
	elementClass: Heart,
	react: React,
});

export const KobberHome = createComponent({
	tagName: "kobber-home",
	elementClass: Home,
	react: React,
});

export const KobberHyperlink = createComponent({
	tagName: "kobber-hyperlink",
	elementClass: Hyperlink,
	react: React,
});

export const KobberImage = createComponent({
	tagName: "kobber-image",
	elementClass: Image,
	react: React,
});

export const KobberImageFlower = createComponent({
	tagName: "kobber-image_flower",
	elementClass: ImageFlower,
	react: React,
});

export const KobberIndentDecrease = createComponent({
	tagName: "kobber-indent_decrease",
	elementClass: IndentDecrease,
	react: React,
});

export const KobberIndentIncrease = createComponent({
	tagName: "kobber-indent_increase",
	elementClass: IndentIncrease,
	react: React,
});

export const KobberInformation = createComponent({
	tagName: "kobber-information",
	elementClass: Information,
	react: React,
});

export const KobberKeyboard = createComponent({
	tagName: "kobber-keyboard",
	elementClass: Keyboard,
	react: React,
});

export const KobberLayers = createComponent({
	tagName: "kobber-layers",
	elementClass: Layers,
	react: React,
});

export const KobberLayersBack = createComponent({
	tagName: "kobber-layers_back",
	elementClass: LayersBack,
	react: React,
});

export const KobberLayoutLeft = createComponent({
	tagName: "kobber-layout_left",
	elementClass: LayoutLeft,
	react: React,
});

export const KobberLayoutModule = createComponent({
	tagName: "kobber-layout_module",
	elementClass: LayoutModule,
	react: React,
});

export const KobberLayoutRight = createComponent({
	tagName: "kobber-layout_right",
	elementClass: LayoutRight,
	react: React,
});

export const KobberLibrary = createComponent({
	tagName: "kobber-library",
	elementClass: Library,
	react: React,
});

export const KobberLightBulb = createComponent({
	tagName: "kobber-light_bulb",
	elementClass: LightBulb,
	react: React,
});

export const KobberLockLocked = createComponent({
	tagName: "kobber-lock_locked",
	elementClass: LockLocked,
	react: React,
});

export const KobberLockUnlocked = createComponent({
	tagName: "kobber-lock_unlocked",
	elementClass: LockUnlocked,
	react: React,
});

export const KobberLogin = createComponent({
	tagName: "kobber-login",
	elementClass: Login,
	react: React,
});

export const KobberLogout = createComponent({
	tagName: "kobber-logout",
	elementClass: Logout,
	react: React,
});

export const KobberMagnet = createComponent({
	tagName: "kobber-magnet",
	elementClass: Magnet,
	react: React,
});

export const KobberMenu = createComponent({
	tagName: "kobber-menu",
	elementClass: Menu,
	react: React,
});

export const KobberMessage = createComponent({
	tagName: "kobber-message",
	elementClass: Message,
	react: React,
});

export const KobberMessageQuestion = createComponent({
	tagName: "kobber-message_question",
	elementClass: MessageQuestion,
	react: React,
});

export const KobberMessageStar = createComponent({
	tagName: "kobber-message_star",
	elementClass: MessageStar,
	react: React,
});

export const KobberMessageTyping = createComponent({
	tagName: "kobber-message_typing",
	elementClass: MessageTyping,
	react: React,
});

export const KobberMessageWarning = createComponent({
	tagName: "kobber-message_warning",
	elementClass: MessageWarning,
	react: React,
});

export const KobberModuleEdit = createComponent({
	tagName: "kobber-module_edit",
	elementClass: ModuleEdit,
	react: React,
});

export const KobberModuleFour = createComponent({
	tagName: "kobber-module_four",
	elementClass: ModuleFour,
	react: React,
});

export const KobberMultipleUsers = createComponent({
	tagName: "kobber-multiple_users",
	elementClass: MultipleUsers,
	react: React,
});

export const KobberNewspaper = createComponent({
	tagName: "kobber-newspaper",
	elementClass: Newspaper,
	react: React,
});

export const KobberNotebookPencil = createComponent({
	tagName: "kobber-notebook_pencil",
	elementClass: NotebookPencil,
	react: React,
});

export const KobberNumberList = createComponent({
	tagName: "kobber-number_list",
	elementClass: NumberList,
	react: React,
});

export const KobberOption = createComponent({
	tagName: "kobber-option",
	elementClass: Option,
	react: React,
});

export const KobberPalette = createComponent({
	tagName: "kobber-palette",
	elementClass: Palette,
	react: React,
});

export const KobberParagraph = createComponent({
	tagName: "kobber-paragraph",
	elementClass: Paragraph,
	react: React,
});

export const KobberParagraphCenter = createComponent({
	tagName: "kobber-paragraph_center",
	elementClass: ParagraphCenter,
	react: React,
});

export const KobberParagraphLeft = createComponent({
	tagName: "kobber-paragraph_left",
	elementClass: ParagraphLeft,
	react: React,
});

export const KobberParagraphRight = createComponent({
	tagName: "kobber-paragraph_right",
	elementClass: ParagraphRight,
	react: React,
});

export const KobberPartyBalloon = createComponent({
	tagName: "kobber-party_balloon",
	elementClass: PartyBalloon,
	react: React,
});

export const KobberPause = createComponent({
	tagName: "kobber-pause",
	elementClass: Pause,
	react: React,
});

export const KobberPenTools = createComponent({
	tagName: "kobber-pen_tools",
	elementClass: PenTools,
	react: React,
});

export const KobberPenWrite = createComponent({
	tagName: "kobber-pen_write",
	elementClass: PenWrite,
	react: React,
});

export const KobberPencil = createComponent({
	tagName: "kobber-pencil",
	elementClass: Pencil,
	react: React,
});

export const KobberPin = createComponent({
	tagName: "kobber-pin",
	elementClass: Pin,
	react: React,
});

export const KobberPinRemove = createComponent({
	tagName: "kobber-pin_remove",
	elementClass: PinRemove,
	react: React,
});

export const KobberPlay = createComponent({
	tagName: "kobber-play",
	elementClass: Play,
	react: React,
});

export const KobberPrinter = createComponent({
	tagName: "kobber-printer",
	elementClass: Printer,
	react: React,
});

export const KobberQuestionCircle = createComponent({
	tagName: "kobber-question_circle",
	elementClass: QuestionCircle,
	react: React,
});

export const KobberRankingStar = createComponent({
	tagName: "kobber-ranking_star",
	elementClass: RankingStar,
	react: React,
});

export const KobberRatingStarCheck = createComponent({
	tagName: "kobber-rating_star_check",
	elementClass: RatingStarCheck,
	react: React,
});

export const KobberRead = createComponent({
	tagName: "kobber-read",
	elementClass: Read,
	react: React,
});

export const KobberReadHome = createComponent({
	tagName: "kobber-read_home",
	elementClass: ReadHome,
	react: React,
});

export const KobberReadIdea = createComponent({
	tagName: "kobber-read_idea",
	elementClass: ReadIdea,
	react: React,
});

export const KobberRedo = createComponent({
	tagName: "kobber-redo",
	elementClass: Redo,
	react: React,
});

export const KobberRefresh = createComponent({
	tagName: "kobber-refresh",
	elementClass: Refresh,
	react: React,
});

export const KobberReload = createComponent({
	tagName: "kobber-reload",
	elementClass: Reload,
	react: React,
});

export const KobberRemove = createComponent({
	tagName: "kobber-remove",
	elementClass: Remove,
	react: React,
});

export const KobberRetouchGraph = createComponent({
	tagName: "kobber-retouch_graph",
	elementClass: RetouchGraph,
	react: React,
});

export const KobberRibbonStar = createComponent({
	tagName: "kobber-ribbon_star",
	elementClass: RibbonStar,
	react: React,
});

export const KobberRocket = createComponent({
	tagName: "kobber-rocket",
	elementClass: Rocket,
	react: React,
});

export const KobberSchoolTeacher = createComponent({
	tagName: "kobber-school_teacher",
	elementClass: SchoolTeacher,
	react: React,
});

export const KobberSearch = createComponent({
	tagName: "kobber-search",
	elementClass: Search,
	react: React,
});

export const KobberSettings = createComponent({
	tagName: "kobber-settings",
	elementClass: Settings,
	react: React,
});

export const KobberSettingsSlider = createComponent({
	tagName: "kobber-settings_slider",
	elementClass: SettingsSlider,
	react: React,
});

export const KobberShare = createComponent({
	tagName: "kobber-share",
	elementClass: Share,
	react: React,
});

export const KobberShrink = createComponent({
	tagName: "kobber-shrink",
	elementClass: Shrink,
	react: React,
});

export const KobberShuffle = createComponent({
	tagName: "kobber-shuffle",
	elementClass: Shuffle,
	react: React,
});

export const KobberStudyMath = createComponent({
	tagName: "kobber-study_math",
	elementClass: StudyMath,
	react: React,
});

export const KobberSubscript = createComponent({
	tagName: "kobber-subscript",
	elementClass: Subscript,
	react: React,
});

export const KobberSubtract = createComponent({
	tagName: "kobber-subtract",
	elementClass: Subtract,
	react: React,
});

export const KobberSuperscript = createComponent({
	tagName: "kobber-superscript",
	elementClass: Superscript,
	react: React,
});

export const KobberSynchronizeArrowsSquare = createComponent({
	tagName: "kobber-synchronize__arrows__square",
	elementClass: SynchronizeArrowsSquare,
	react: React,
});

export const KobberSynchronizeArrowClock = createComponent({
	tagName: "kobber-synchronize_arrow_clock",
	elementClass: SynchronizeArrowClock,
	react: React,
});

export const KobberSynchronizeArrowsWarning = createComponent({
	tagName: "kobber-synchronize_arrows_warning",
	elementClass: SynchronizeArrowsWarning,
	react: React,
});

export const KobberTabletTouch = createComponent({
	tagName: "kobber-tablet_touch",
	elementClass: TabletTouch,
	react: React,
});

export const KobberTaskList = createComponent({
	tagName: "kobber-task_list",
	elementClass: TaskList,
	react: React,
});

export const KobberTaskListClock = createComponent({
	tagName: "kobber-task_list_clock",
	elementClass: TaskListClock,
	react: React,
});

export const KobberTeacherCorrect = createComponent({
	tagName: "kobber-teacher_correct",
	elementClass: TeacherCorrect,
	react: React,
});

export const KobberTextBold = createComponent({
	tagName: "kobber-text_bold",
	elementClass: TextBold,
	react: React,
});

export const KobberTextFormat = createComponent({
	tagName: "kobber-text_format",
	elementClass: TextFormat,
	react: React,
});

export const KobberTextItalic = createComponent({
	tagName: "kobber-text_italic",
	elementClass: TextItalic,
	react: React,
});

export const KobberTextStyle = createComponent({
	tagName: "kobber-text_style",
	elementClass: TextStyle,
	react: React,
});

export const KobberTextSync = createComponent({
	tagName: "kobber-text_sync",
	elementClass: TextSync,
	react: React,
});

export const KobberTextUnderline = createComponent({
	tagName: "kobber-text_underline",
	elementClass: TextUnderline,
	react: React,
});

export const KobberTransfer = createComponent({
	tagName: "kobber-transfer",
	elementClass: Transfer,
	react: React,
});

export const KobberUndo = createComponent({
	tagName: "kobber-undo",
	elementClass: Undo,
	react: React,
});

export const KobberUser = createComponent({
	tagName: "kobber-user",
	elementClass: User,
	react: React,
});

export const KobberUserEdit = createComponent({
	tagName: "kobber-user_edit",
	elementClass: UserEdit,
	react: React,
});

export const KobberUserQuestion = createComponent({
	tagName: "kobber-user_question",
	elementClass: UserQuestion,
	react: React,
});

export const KobberUsers = createComponent({
	tagName: "kobber-users",
	elementClass: Users,
	react: React,
});

export const KobberVideoFileAdd = createComponent({
	tagName: "kobber-video_file_add",
	elementClass: VideoFileAdd,
	react: React,
});

export const KobberVideoPlayer = createComponent({
	tagName: "kobber-video_player",
	elementClass: VideoPlayer,
	react: React,
});

export const KobberView = createComponent({
	tagName: "kobber-view",
	elementClass: View,
	react: React,
});

export const KobberViewOff = createComponent({
	tagName: "kobber-view_off",
	elementClass: ViewOff,
	react: React,
});

export const KobberVolumeOff = createComponent({
	tagName: "kobber-volume_off",
	elementClass: VolumeOff,
	react: React,
});

export const KobberVolumeOn = createComponent({
	tagName: "kobber-volume_on",
	elementClass: VolumeOn,
	react: React,
});

export const KobberWarning = createComponent({
	tagName: "kobber-warning",
	elementClass: Warning,
	react: React,
});

export const KobberYoutube = createComponent({
	tagName: "kobber-youtube",
	elementClass: Youtube,
	react: React,
});
