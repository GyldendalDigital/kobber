import { createComponent } from "@lit/react";
import * as React from "react";
 
import { Add as KobberAdd } from "./icon/icons/add";
import { AddFigure as KobberAddFigure } from "./icon/icons/add_figure";
import { AddSquare as KobberAddSquare } from "./icon/icons/add_square";
import { AlarmBell as KobberAlarmBell } from "./icon/icons/alarm_bell";
import { AlarmClock as KobberAlarmClock } from "./icon/icons/alarm_clock";
import { AlarmTimer as KobberAlarmTimer } from "./icon/icons/alarm_timer";
import { AnalyticBars as KobberAnalyticBars } from "./icon/icons/analytic_bars";
import { ArrowBack as KobberArrowBack } from "./icon/icons/arrow_back";
import { ArrowDown as KobberArrowDown } from "./icon/icons/arrow_down";
import { ArrowLeft as KobberArrowLeft } from "./icon/icons/arrow_left";
import { ArrowRight as KobberArrowRight } from "./icon/icons/arrow_right";
import { ArrowUp as KobberArrowUp } from "./icon/icons/arrow_up";
import { Assets as KobberAssets } from "./icon/icons/assets";
import { AudioRecording as KobberAudioRecording } from "./icon/icons/audio_recording";
import { Backspace as KobberBackspace } from "./icon/icons/backspace";
import { Banned as KobberBanned } from "./icon/icons/banned";
import { Binocular as KobberBinocular } from "./icon/icons/binocular";
import { BookFlipPage as KobberBookFlipPage } from "./icon/icons/book_flip_page";
import { BookOpen as KobberBookOpen } from "./icon/icons/book_open";
import { Bookmark as KobberBookmark } from "./icon/icons/bookmark";
import { BulletList as KobberBulletList } from "./icon/icons/bullet_list";
import { Calendar as KobberCalendar } from "./icon/icons/calendar";
import { Camera as KobberCamera } from "./icon/icons/camera";
import { Chat as KobberChat } from "./icon/icons/chat";
import { Check as KobberCheck } from "./icon/icons/check";
import { CheckCircle as KobberCheckCircle } from "./icon/icons/check_circle";
import { Checklist as KobberChecklist } from "./icon/icons/checklist";
import { ChevronDown as KobberChevronDown } from "./icon/icons/chevron_down";
import { ChevronUp as KobberChevronUp } from "./icon/icons/chevron_up";
import { Circle as KobberCircle } from "./icon/icons/circle";
import { CircleShapeAdd as KobberCircleShapeAdd } from "./icon/icons/circle_shape_add";
import { Clock as KobberClock } from "./icon/icons/clock";
import { ClockHand as KobberClockHand } from "./icon/icons/clock_hand";
import { Close as KobberClose } from "./icon/icons/close";
import { ColorBrush as KobberColorBrush } from "./icon/icons/color_brush";
import { CopyPaste as KobberCopyPaste } from "./icon/icons/copy_paste";
import { CursorPointer as KobberCursorPointer } from "./icon/icons/cursor_pointer";
import { CursorPointerCircle as KobberCursorPointerCircle } from "./icon/icons/cursor_pointer_circle";
import { Dice as KobberDice } from "./icon/icons/dice";
import { Dictionary as KobberDictionary } from "./icon/icons/dictionary";
import { Download as KobberDownload } from "./icon/icons/download";
import { DrawTablet as KobberDrawTablet } from "./icon/icons/draw_tablet";
import { Elements as KobberElements } from "./icon/icons/elements";
import { Envelope as KobberEnvelope } from "./icon/icons/envelope";
import { Eraser as KobberEraser } from "./icon/icons/eraser";
import { Expand as KobberExpand } from "./icon/icons/expand";
import { ExpandResize as KobberExpandResize } from "./icon/icons/expand_resize";
import { ExternalLink as KobberExternalLink } from "./icon/icons/external_link";
import { ExternalLinkArrow as KobberExternalLinkArrow } from "./icon/icons/external_link_arrow";
import { FemaleHeadset as KobberFemaleHeadset } from "./icon/icons/female_headset";
import { FlipRight as KobberFlipRight } from "./icon/icons/flip_right";
import { FolderBookmark as KobberFolderBookmark } from "./icon/icons/folder_bookmark";
import { FontExpand as KobberFontExpand } from "./icon/icons/font_expand";
import { FormTemplate as KobberFormTemplate } from "./icon/icons/form_template";
import { FrameExpand as KobberFrameExpand } from "./icon/icons/frame_expand";
import { FrameShrink as KobberFrameShrink } from "./icon/icons/frame_shrink";
import { GameController as KobberGameController } from "./icon/icons/game_controller";
import { Glasses as KobberGlasses } from "./icon/icons/glasses";
import { GraphStats as KobberGraphStats } from "./icon/icons/graph_stats";
import { Headphones as KobberHeadphones } from "./icon/icons/headphones";
import { Heart as KobberHeart } from "./icon/icons/heart";
import { Home as KobberHome } from "./icon/icons/home";
import { Hyperlink as KobberHyperlink } from "./icon/icons/hyperlink";
import { Image as KobberImage } from "./icon/icons/image";
import { ImageFlower as KobberImageFlower } from "./icon/icons/image_flower";
import { IndentDecrease as KobberIndentDecrease } from "./icon/icons/indent_decrease";
import { IndentIncrease as KobberIndentIncrease } from "./icon/icons/indent_increase";
import { Information as KobberInformation } from "./icon/icons/information";
import { Keyboard as KobberKeyboard } from "./icon/icons/keyboard";
import { Layers as KobberLayers } from "./icon/icons/layers";
import { LayersBack as KobberLayersBack } from "./icon/icons/layers_back";
import { LayoutLeft as KobberLayoutLeft } from "./icon/icons/layout_left";
import { LayoutModule as KobberLayoutModule } from "./icon/icons/layout_module";
import { LayoutRight as KobberLayoutRight } from "./icon/icons/layout_right";
import { Library as KobberLibrary } from "./icon/icons/library";
import { LightBulb as KobberLightBulb } from "./icon/icons/light_bulb";
import { LockLocked as KobberLockLocked } from "./icon/icons/lock_locked";
import { LockUnlocked as KobberLockUnlocked } from "./icon/icons/lock_unlocked";
import { Login as KobberLogin } from "./icon/icons/login";
import { Logout as KobberLogout } from "./icon/icons/logout";
import { Magnet as KobberMagnet } from "./icon/icons/magnet";
import { Menu as KobberMenu } from "./icon/icons/menu";
import { Message as KobberMessage } from "./icon/icons/message";
import { MessageQuestion as KobberMessageQuestion } from "./icon/icons/message_question";
import { MessageStar as KobberMessageStar } from "./icon/icons/message_star";
import { MessageTyping as KobberMessageTyping } from "./icon/icons/message_typing";
import { MessageWarning as KobberMessageWarning } from "./icon/icons/message_warning";
import { ModuleEdit as KobberModuleEdit } from "./icon/icons/module_edit";
import { ModuleFour as KobberModuleFour } from "./icon/icons/module_four";
import { MultipleUsers as KobberMultipleUsers } from "./icon/icons/multiple_users";
import { Newspaper as KobberNewspaper } from "./icon/icons/newspaper";
import { NotebookPencil as KobberNotebookPencil } from "./icon/icons/notebook_pencil";
import { NumberList as KobberNumberList } from "./icon/icons/number_list";
import { Option as KobberOption } from "./icon/icons/option";
import { Palette as KobberPalette } from "./icon/icons/palette";
import { Paragraph as KobberParagraph } from "./icon/icons/paragraph";
import { ParagraphCenter as KobberParagraphCenter } from "./icon/icons/paragraph_center";
import { ParagraphLeft as KobberParagraphLeft } from "./icon/icons/paragraph_left";
import { ParagraphRight as KobberParagraphRight } from "./icon/icons/paragraph_right";
import { PartyBalloon as KobberPartyBalloon } from "./icon/icons/party_balloon";
import { Pause as KobberPause } from "./icon/icons/pause";
import { PenTools as KobberPenTools } from "./icon/icons/pen_tools";
import { PenWrite as KobberPenWrite } from "./icon/icons/pen_write";
import { Pencil as KobberPencil } from "./icon/icons/pencil";
import { Pin as KobberPin } from "./icon/icons/pin";
import { PinRemove as KobberPinRemove } from "./icon/icons/pin_remove";
import { Play as KobberPlay } from "./icon/icons/play";
import { Printer as KobberPrinter } from "./icon/icons/printer";
import { QuestionCircle as KobberQuestionCircle } from "./icon/icons/question_circle";
import { RankingStar as KobberRankingStar } from "./icon/icons/ranking_star";
import { RatingStarCheck as KobberRatingStarCheck } from "./icon/icons/rating_star_check";
import { Read as KobberRead } from "./icon/icons/read";
import { ReadHome as KobberReadHome } from "./icon/icons/read_home";
import { ReadIdea as KobberReadIdea } from "./icon/icons/read_idea";
import { Redo as KobberRedo } from "./icon/icons/redo";
import { Refresh as KobberRefresh } from "./icon/icons/refresh";
import { Reload as KobberReload } from "./icon/icons/reload";
import { Remove as KobberRemove } from "./icon/icons/remove";
import { RetouchGraph as KobberRetouchGraph } from "./icon/icons/retouch_graph";
import { RibbonStar as KobberRibbonStar } from "./icon/icons/ribbon_star";
import { Rocket as KobberRocket } from "./icon/icons/rocket";
import { Search as KobberSearch } from "./icon/icons/search";
import { Settings as KobberSettings } from "./icon/icons/settings";
import { SettingsSlider as KobberSettingsSlider } from "./icon/icons/settings_slider";
import { Share as KobberShare } from "./icon/icons/share";
import { Shrink as KobberShrink } from "./icon/icons/shrink";
import { Shuffle as KobberShuffle } from "./icon/icons/shuffle";
import { SocialInstagram as KobberSocialInstagram } from "./icon/icons/social_instagram";
import { StudyMath as KobberStudyMath } from "./icon/icons/study_math";
import { Subscript as KobberSubscript } from "./icon/icons/subscript";
import { Subtract as KobberSubtract } from "./icon/icons/subtract";
import { Superscript as KobberSuperscript } from "./icon/icons/superscript";
import { SynchronizeArrowsSquare as KobberSynchronizeArrowsSquare } from "./icon/icons/synchronize__arrows__square";
import { SynchronizeArrowClock as KobberSynchronizeArrowClock } from "./icon/icons/synchronize_arrow_clock";
import { SynchronizeArrowsWarning as KobberSynchronizeArrowsWarning } from "./icon/icons/synchronize_arrows_warning";
import { TabletTouch as KobberTabletTouch } from "./icon/icons/tablet_touch";
import { TaskList as KobberTaskList } from "./icon/icons/task_list";
import { TaskListClock as KobberTaskListClock } from "./icon/icons/task_list_clock";
import { Teacher as KobberTeacher } from "./icon/icons/teacher";
import { TeacherCorrect as KobberTeacherCorrect } from "./icon/icons/teacher_correct";
import { TextBold as KobberTextBold } from "./icon/icons/text_bold";
import { TextFormat as KobberTextFormat } from "./icon/icons/text_format";
import { TextItalic as KobberTextItalic } from "./icon/icons/text_italic";
import { TextStyle as KobberTextStyle } from "./icon/icons/text_style";
import { TextSync as KobberTextSync } from "./icon/icons/text_sync";
import { TextUnderline as KobberTextUnderline } from "./icon/icons/text_underline";
import { Transfer as KobberTransfer } from "./icon/icons/transfer";
import { Trash as KobberTrash } from "./icon/icons/trash";
import { Undo as KobberUndo } from "./icon/icons/undo";
import { User as KobberUser } from "./icon/icons/user";
import { UserEdit as KobberUserEdit } from "./icon/icons/user_edit";
import { UserQuestion as KobberUserQuestion } from "./icon/icons/user_question";
import { Users as KobberUsers } from "./icon/icons/users";
import { VideoFileAdd as KobberVideoFileAdd } from "./icon/icons/video_file_add";
import { VideoPlayer as KobberVideoPlayer } from "./icon/icons/video_player";
import { View as KobberView } from "./icon/icons/view";
import { ViewOff as KobberViewOff } from "./icon/icons/view_off";
import { VolumeOff as KobberVolumeOff } from "./icon/icons/volume_off";
import { VolumeOn as KobberVolumeOn } from "./icon/icons/volume_on";
import { Warning as KobberWarning } from "./icon/icons/warning";
import { Youtube as KobberYoutube } from "./icon/icons/youtube"; 

export const Add = createComponent({
  tagName: "kobber-add",
  elementClass: KobberAdd,
  react: React,
});

export const AddFigure = createComponent({
  tagName: "kobber-add_figure",
  elementClass: KobberAddFigure,
  react: React,
});

export const AddSquare = createComponent({
  tagName: "kobber-add_square",
  elementClass: KobberAddSquare,
  react: React,
});

export const AlarmBell = createComponent({
  tagName: "kobber-alarm_bell",
  elementClass: KobberAlarmBell,
  react: React,
});

export const AlarmClock = createComponent({
  tagName: "kobber-alarm_clock",
  elementClass: KobberAlarmClock,
  react: React,
});

export const AlarmTimer = createComponent({
  tagName: "kobber-alarm_timer",
  elementClass: KobberAlarmTimer,
  react: React,
});

export const AnalyticBars = createComponent({
  tagName: "kobber-analytic_bars",
  elementClass: KobberAnalyticBars,
  react: React,
});

export const ArrowBack = createComponent({
  tagName: "kobber-arrow_back",
  elementClass: KobberArrowBack,
  react: React,
});

export const ArrowDown = createComponent({
  tagName: "kobber-arrow_down",
  elementClass: KobberArrowDown,
  react: React,
});

export const ArrowLeft = createComponent({
  tagName: "kobber-arrow_left",
  elementClass: KobberArrowLeft,
  react: React,
});

export const ArrowRight = createComponent({
  tagName: "kobber-arrow_right",
  elementClass: KobberArrowRight,
  react: React,
});

export const ArrowUp = createComponent({
  tagName: "kobber-arrow_up",
  elementClass: KobberArrowUp,
  react: React,
});

export const Assets = createComponent({
  tagName: "kobber-assets",
  elementClass: KobberAssets,
  react: React,
});

export const AudioRecording = createComponent({
  tagName: "kobber-audio_recording",
  elementClass: KobberAudioRecording,
  react: React,
});

export const Backspace = createComponent({
  tagName: "kobber-backspace",
  elementClass: KobberBackspace,
  react: React,
});

export const Banned = createComponent({
  tagName: "kobber-banned",
  elementClass: KobberBanned,
  react: React,
});

export const Binocular = createComponent({
  tagName: "kobber-binocular",
  elementClass: KobberBinocular,
  react: React,
});

export const BookFlipPage = createComponent({
  tagName: "kobber-book_flip_page",
  elementClass: KobberBookFlipPage,
  react: React,
});

export const BookOpen = createComponent({
  tagName: "kobber-book_open",
  elementClass: KobberBookOpen,
  react: React,
});

export const Bookmark = createComponent({
  tagName: "kobber-bookmark",
  elementClass: KobberBookmark,
  react: React,
});

export const BulletList = createComponent({
  tagName: "kobber-bullet_list",
  elementClass: KobberBulletList,
  react: React,
});

export const Calendar = createComponent({
  tagName: "kobber-calendar",
  elementClass: KobberCalendar,
  react: React,
});

export const Camera = createComponent({
  tagName: "kobber-camera",
  elementClass: KobberCamera,
  react: React,
});

export const Chat = createComponent({
  tagName: "kobber-chat",
  elementClass: KobberChat,
  react: React,
});

export const Check = createComponent({
  tagName: "kobber-check",
  elementClass: KobberCheck,
  react: React,
});

export const CheckCircle = createComponent({
  tagName: "kobber-check_circle",
  elementClass: KobberCheckCircle,
  react: React,
});

export const Checklist = createComponent({
  tagName: "kobber-checklist",
  elementClass: KobberChecklist,
  react: React,
});

export const ChevronDown = createComponent({
  tagName: "kobber-chevron_down",
  elementClass: KobberChevronDown,
  react: React,
});

export const ChevronUp = createComponent({
  tagName: "kobber-chevron_up",
  elementClass: KobberChevronUp,
  react: React,
});

export const Circle = createComponent({
  tagName: "kobber-circle",
  elementClass: KobberCircle,
  react: React,
});

export const CircleShapeAdd = createComponent({
  tagName: "kobber-circle_shape_add",
  elementClass: KobberCircleShapeAdd,
  react: React,
});

export const Clock = createComponent({
  tagName: "kobber-clock",
  elementClass: KobberClock,
  react: React,
});

export const ClockHand = createComponent({
  tagName: "kobber-clock_hand",
  elementClass: KobberClockHand,
  react: React,
});

export const Close = createComponent({
  tagName: "kobber-close",
  elementClass: KobberClose,
  react: React,
});

export const ColorBrush = createComponent({
  tagName: "kobber-color_brush",
  elementClass: KobberColorBrush,
  react: React,
});

export const CopyPaste = createComponent({
  tagName: "kobber-copy_paste",
  elementClass: KobberCopyPaste,
  react: React,
});

export const CursorPointer = createComponent({
  tagName: "kobber-cursor_pointer",
  elementClass: KobberCursorPointer,
  react: React,
});

export const CursorPointerCircle = createComponent({
  tagName: "kobber-cursor_pointer_circle",
  elementClass: KobberCursorPointerCircle,
  react: React,
});

export const Dice = createComponent({
  tagName: "kobber-dice",
  elementClass: KobberDice,
  react: React,
});

export const Dictionary = createComponent({
  tagName: "kobber-dictionary",
  elementClass: KobberDictionary,
  react: React,
});

export const Download = createComponent({
  tagName: "kobber-download",
  elementClass: KobberDownload,
  react: React,
});

export const DrawTablet = createComponent({
  tagName: "kobber-draw_tablet",
  elementClass: KobberDrawTablet,
  react: React,
});

export const Elements = createComponent({
  tagName: "kobber-elements",
  elementClass: KobberElements,
  react: React,
});

export const Envelope = createComponent({
  tagName: "kobber-envelope",
  elementClass: KobberEnvelope,
  react: React,
});

export const Eraser = createComponent({
  tagName: "kobber-eraser",
  elementClass: KobberEraser,
  react: React,
});

export const Expand = createComponent({
  tagName: "kobber-expand",
  elementClass: KobberExpand,
  react: React,
});

export const ExpandResize = createComponent({
  tagName: "kobber-expand_resize",
  elementClass: KobberExpandResize,
  react: React,
});

export const ExternalLink = createComponent({
  tagName: "kobber-external_link",
  elementClass: KobberExternalLink,
  react: React,
});

export const ExternalLinkArrow = createComponent({
  tagName: "kobber-external_link_arrow",
  elementClass: KobberExternalLinkArrow,
  react: React,
});

export const FemaleHeadset = createComponent({
  tagName: "kobber-female_headset",
  elementClass: KobberFemaleHeadset,
  react: React,
});

export const FlipRight = createComponent({
  tagName: "kobber-flip_right",
  elementClass: KobberFlipRight,
  react: React,
});

export const FolderBookmark = createComponent({
  tagName: "kobber-folder_bookmark",
  elementClass: KobberFolderBookmark,
  react: React,
});

export const FontExpand = createComponent({
  tagName: "kobber-font_expand",
  elementClass: KobberFontExpand,
  react: React,
});

export const FormTemplate = createComponent({
  tagName: "kobber-form_template",
  elementClass: KobberFormTemplate,
  react: React,
});

export const FrameExpand = createComponent({
  tagName: "kobber-frame_expand",
  elementClass: KobberFrameExpand,
  react: React,
});

export const FrameShrink = createComponent({
  tagName: "kobber-frame_shrink",
  elementClass: KobberFrameShrink,
  react: React,
});

export const GameController = createComponent({
  tagName: "kobber-game_controller",
  elementClass: KobberGameController,
  react: React,
});

export const Glasses = createComponent({
  tagName: "kobber-glasses",
  elementClass: KobberGlasses,
  react: React,
});

export const GraphStats = createComponent({
  tagName: "kobber-graph_stats",
  elementClass: KobberGraphStats,
  react: React,
});

export const Headphones = createComponent({
  tagName: "kobber-headphones",
  elementClass: KobberHeadphones,
  react: React,
});

export const Heart = createComponent({
  tagName: "kobber-heart",
  elementClass: KobberHeart,
  react: React,
});

export const Home = createComponent({
  tagName: "kobber-home",
  elementClass: KobberHome,
  react: React,
});

export const Hyperlink = createComponent({
  tagName: "kobber-hyperlink",
  elementClass: KobberHyperlink,
  react: React,
});

export const Image = createComponent({
  tagName: "kobber-image",
  elementClass: KobberImage,
  react: React,
});

export const ImageFlower = createComponent({
  tagName: "kobber-image_flower",
  elementClass: KobberImageFlower,
  react: React,
});

export const IndentDecrease = createComponent({
  tagName: "kobber-indent_decrease",
  elementClass: KobberIndentDecrease,
  react: React,
});

export const IndentIncrease = createComponent({
  tagName: "kobber-indent_increase",
  elementClass: KobberIndentIncrease,
  react: React,
});

export const Information = createComponent({
  tagName: "kobber-information",
  elementClass: KobberInformation,
  react: React,
});

export const Keyboard = createComponent({
  tagName: "kobber-keyboard",
  elementClass: KobberKeyboard,
  react: React,
});

export const Layers = createComponent({
  tagName: "kobber-layers",
  elementClass: KobberLayers,
  react: React,
});

export const LayersBack = createComponent({
  tagName: "kobber-layers_back",
  elementClass: KobberLayersBack,
  react: React,
});

export const LayoutLeft = createComponent({
  tagName: "kobber-layout_left",
  elementClass: KobberLayoutLeft,
  react: React,
});

export const LayoutModule = createComponent({
  tagName: "kobber-layout_module",
  elementClass: KobberLayoutModule,
  react: React,
});

export const LayoutRight = createComponent({
  tagName: "kobber-layout_right",
  elementClass: KobberLayoutRight,
  react: React,
});

export const Library = createComponent({
  tagName: "kobber-library",
  elementClass: KobberLibrary,
  react: React,
});

export const LightBulb = createComponent({
  tagName: "kobber-light_bulb",
  elementClass: KobberLightBulb,
  react: React,
});

export const LockLocked = createComponent({
  tagName: "kobber-lock_locked",
  elementClass: KobberLockLocked,
  react: React,
});

export const LockUnlocked = createComponent({
  tagName: "kobber-lock_unlocked",
  elementClass: KobberLockUnlocked,
  react: React,
});

export const Login = createComponent({
  tagName: "kobber-login",
  elementClass: KobberLogin,
  react: React,
});

export const Logout = createComponent({
  tagName: "kobber-logout",
  elementClass: KobberLogout,
  react: React,
});

export const Magnet = createComponent({
  tagName: "kobber-magnet",
  elementClass: KobberMagnet,
  react: React,
});

export const Menu = createComponent({
  tagName: "kobber-menu",
  elementClass: KobberMenu,
  react: React,
});

export const Message = createComponent({
  tagName: "kobber-message",
  elementClass: KobberMessage,
  react: React,
});

export const MessageQuestion = createComponent({
  tagName: "kobber-message_question",
  elementClass: KobberMessageQuestion,
  react: React,
});

export const MessageStar = createComponent({
  tagName: "kobber-message_star",
  elementClass: KobberMessageStar,
  react: React,
});

export const MessageTyping = createComponent({
  tagName: "kobber-message_typing",
  elementClass: KobberMessageTyping,
  react: React,
});

export const MessageWarning = createComponent({
  tagName: "kobber-message_warning",
  elementClass: KobberMessageWarning,
  react: React,
});

export const ModuleEdit = createComponent({
  tagName: "kobber-module_edit",
  elementClass: KobberModuleEdit,
  react: React,
});

export const ModuleFour = createComponent({
  tagName: "kobber-module_four",
  elementClass: KobberModuleFour,
  react: React,
});

export const MultipleUsers = createComponent({
  tagName: "kobber-multiple_users",
  elementClass: KobberMultipleUsers,
  react: React,
});

export const Newspaper = createComponent({
  tagName: "kobber-newspaper",
  elementClass: KobberNewspaper,
  react: React,
});

export const NotebookPencil = createComponent({
  tagName: "kobber-notebook_pencil",
  elementClass: KobberNotebookPencil,
  react: React,
});

export const NumberList = createComponent({
  tagName: "kobber-number_list",
  elementClass: KobberNumberList,
  react: React,
});

export const Option = createComponent({
  tagName: "kobber-option",
  elementClass: KobberOption,
  react: React,
});

export const Palette = createComponent({
  tagName: "kobber-palette",
  elementClass: KobberPalette,
  react: React,
});

export const Paragraph = createComponent({
  tagName: "kobber-paragraph",
  elementClass: KobberParagraph,
  react: React,
});

export const ParagraphCenter = createComponent({
  tagName: "kobber-paragraph_center",
  elementClass: KobberParagraphCenter,
  react: React,
});

export const ParagraphLeft = createComponent({
  tagName: "kobber-paragraph_left",
  elementClass: KobberParagraphLeft,
  react: React,
});

export const ParagraphRight = createComponent({
  tagName: "kobber-paragraph_right",
  elementClass: KobberParagraphRight,
  react: React,
});

export const PartyBalloon = createComponent({
  tagName: "kobber-party_balloon",
  elementClass: KobberPartyBalloon,
  react: React,
});

export const Pause = createComponent({
  tagName: "kobber-pause",
  elementClass: KobberPause,
  react: React,
});

export const PenTools = createComponent({
  tagName: "kobber-pen_tools",
  elementClass: KobberPenTools,
  react: React,
});

export const PenWrite = createComponent({
  tagName: "kobber-pen_write",
  elementClass: KobberPenWrite,
  react: React,
});

export const Pencil = createComponent({
  tagName: "kobber-pencil",
  elementClass: KobberPencil,
  react: React,
});

export const Pin = createComponent({
  tagName: "kobber-pin",
  elementClass: KobberPin,
  react: React,
});

export const PinRemove = createComponent({
  tagName: "kobber-pin_remove",
  elementClass: KobberPinRemove,
  react: React,
});

export const Play = createComponent({
  tagName: "kobber-play",
  elementClass: KobberPlay,
  react: React,
});

export const Printer = createComponent({
  tagName: "kobber-printer",
  elementClass: KobberPrinter,
  react: React,
});

export const QuestionCircle = createComponent({
  tagName: "kobber-question_circle",
  elementClass: KobberQuestionCircle,
  react: React,
});

export const RankingStar = createComponent({
  tagName: "kobber-ranking_star",
  elementClass: KobberRankingStar,
  react: React,
});

export const RatingStarCheck = createComponent({
  tagName: "kobber-rating_star_check",
  elementClass: KobberRatingStarCheck,
  react: React,
});

export const Read = createComponent({
  tagName: "kobber-read",
  elementClass: KobberRead,
  react: React,
});

export const ReadHome = createComponent({
  tagName: "kobber-read_home",
  elementClass: KobberReadHome,
  react: React,
});

export const ReadIdea = createComponent({
  tagName: "kobber-read_idea",
  elementClass: KobberReadIdea,
  react: React,
});

export const Redo = createComponent({
  tagName: "kobber-redo",
  elementClass: KobberRedo,
  react: React,
});

export const Refresh = createComponent({
  tagName: "kobber-refresh",
  elementClass: KobberRefresh,
  react: React,
});

export const Reload = createComponent({
  tagName: "kobber-reload",
  elementClass: KobberReload,
  react: React,
});

export const Remove = createComponent({
  tagName: "kobber-remove",
  elementClass: KobberRemove,
  react: React,
});

export const RetouchGraph = createComponent({
  tagName: "kobber-retouch_graph",
  elementClass: KobberRetouchGraph,
  react: React,
});

export const RibbonStar = createComponent({
  tagName: "kobber-ribbon_star",
  elementClass: KobberRibbonStar,
  react: React,
});

export const Rocket = createComponent({
  tagName: "kobber-rocket",
  elementClass: KobberRocket,
  react: React,
});

export const Search = createComponent({
  tagName: "kobber-search",
  elementClass: KobberSearch,
  react: React,
});

export const Settings = createComponent({
  tagName: "kobber-settings",
  elementClass: KobberSettings,
  react: React,
});

export const SettingsSlider = createComponent({
  tagName: "kobber-settings_slider",
  elementClass: KobberSettingsSlider,
  react: React,
});

export const Share = createComponent({
  tagName: "kobber-share",
  elementClass: KobberShare,
  react: React,
});

export const Shrink = createComponent({
  tagName: "kobber-shrink",
  elementClass: KobberShrink,
  react: React,
});

export const Shuffle = createComponent({
  tagName: "kobber-shuffle",
  elementClass: KobberShuffle,
  react: React,
});

export const SocialInstagram = createComponent({
  tagName: "kobber-social_instagram",
  elementClass: KobberSocialInstagram,
  react: React,
});

export const StudyMath = createComponent({
  tagName: "kobber-study_math",
  elementClass: KobberStudyMath,
  react: React,
});

export const Subscript = createComponent({
  tagName: "kobber-subscript",
  elementClass: KobberSubscript,
  react: React,
});

export const Subtract = createComponent({
  tagName: "kobber-subtract",
  elementClass: KobberSubtract,
  react: React,
});

export const Superscript = createComponent({
  tagName: "kobber-superscript",
  elementClass: KobberSuperscript,
  react: React,
});

export const SynchronizeArrowsSquare = createComponent({
  tagName: "kobber-synchronize__arrows__square",
  elementClass: KobberSynchronizeArrowsSquare,
  react: React,
});

export const SynchronizeArrowClock = createComponent({
  tagName: "kobber-synchronize_arrow_clock",
  elementClass: KobberSynchronizeArrowClock,
  react: React,
});

export const SynchronizeArrowsWarning = createComponent({
  tagName: "kobber-synchronize_arrows_warning",
  elementClass: KobberSynchronizeArrowsWarning,
  react: React,
});

export const TabletTouch = createComponent({
  tagName: "kobber-tablet_touch",
  elementClass: KobberTabletTouch,
  react: React,
});

export const TaskList = createComponent({
  tagName: "kobber-task_list",
  elementClass: KobberTaskList,
  react: React,
});

export const TaskListClock = createComponent({
  tagName: "kobber-task_list_clock",
  elementClass: KobberTaskListClock,
  react: React,
});

export const Teacher = createComponent({
  tagName: "kobber-teacher",
  elementClass: KobberTeacher,
  react: React,
});

export const TeacherCorrect = createComponent({
  tagName: "kobber-teacher_correct",
  elementClass: KobberTeacherCorrect,
  react: React,
});

export const TextBold = createComponent({
  tagName: "kobber-text_bold",
  elementClass: KobberTextBold,
  react: React,
});

export const TextFormat = createComponent({
  tagName: "kobber-text_format",
  elementClass: KobberTextFormat,
  react: React,
});

export const TextItalic = createComponent({
  tagName: "kobber-text_italic",
  elementClass: KobberTextItalic,
  react: React,
});

export const TextStyle = createComponent({
  tagName: "kobber-text_style",
  elementClass: KobberTextStyle,
  react: React,
});

export const TextSync = createComponent({
  tagName: "kobber-text_sync",
  elementClass: KobberTextSync,
  react: React,
});

export const TextUnderline = createComponent({
  tagName: "kobber-text_underline",
  elementClass: KobberTextUnderline,
  react: React,
});

export const Transfer = createComponent({
  tagName: "kobber-transfer",
  elementClass: KobberTransfer,
  react: React,
});

export const Trash = createComponent({
  tagName: "kobber-trash",
  elementClass: KobberTrash,
  react: React,
});

export const Undo = createComponent({
  tagName: "kobber-undo",
  elementClass: KobberUndo,
  react: React,
});

export const User = createComponent({
  tagName: "kobber-user",
  elementClass: KobberUser,
  react: React,
});

export const UserEdit = createComponent({
  tagName: "kobber-user_edit",
  elementClass: KobberUserEdit,
  react: React,
});

export const UserQuestion = createComponent({
  tagName: "kobber-user_question",
  elementClass: KobberUserQuestion,
  react: React,
});

export const Users = createComponent({
  tagName: "kobber-users",
  elementClass: KobberUsers,
  react: React,
});

export const VideoFileAdd = createComponent({
  tagName: "kobber-video_file_add",
  elementClass: KobberVideoFileAdd,
  react: React,
});

export const VideoPlayer = createComponent({
  tagName: "kobber-video_player",
  elementClass: KobberVideoPlayer,
  react: React,
});

export const View = createComponent({
  tagName: "kobber-view",
  elementClass: KobberView,
  react: React,
});

export const ViewOff = createComponent({
  tagName: "kobber-view_off",
  elementClass: KobberViewOff,
  react: React,
});

export const VolumeOff = createComponent({
  tagName: "kobber-volume_off",
  elementClass: KobberVolumeOff,
  react: React,
});

export const VolumeOn = createComponent({
  tagName: "kobber-volume_on",
  elementClass: KobberVolumeOn,
  react: React,
});

export const Warning = createComponent({
  tagName: "kobber-warning",
  elementClass: KobberWarning,
  react: React,
});

export const Youtube = createComponent({
  tagName: "kobber-youtube",
  elementClass: KobberYoutube,
  react: React,
});
