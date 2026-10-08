import React from 'react';
import {
  Download,
  Smartphone,
  Play,
  Menu,
  X,
  MessageSquare,
  MessageCircle,
  Phone,
  Video,
  Star,
  ShieldCheck,
  Shield,
  Wallet,
  Bot,
  Brain,
  Sun,
  Hand,
  Search,
  Send,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Home,
  Sparkles,
  Scale,
  FileText,
  Link as LinkIcon,
  HelpCircle,
  MessagesSquare,
  Compass,
  CheckCircle,
  User,
  Calendar,
  CalendarDays,
  FileCheck,
  LucideProps,
} from 'lucide-react';

export type IconName =
  | 'download'
  | 'install_mobile'
  | 'play_arrow'
  | 'phone_iphone'
  | 'menu'
  | 'close'
  | 'chat'
  | 'call'
  | 'videocam'
  | 'star'
  | 'verified_user'
  | 'video_chat'
  | 'account_balance_wallet'
  | 'smart_toy'
  | 'psychology'
  | 'wb_sunny'
  | 'pan_tool'
  | 'person_search'
  | 'chat_bubble'
  | 'send'
  | 'arrow_forward'
  | 'arrow_back'
  | 'arrow_upward'
  | 'home'
  | 'video_search'
  | 'insights'
  | 'download_for_offline'
  | 'shield'
  | 'gavel'
  | 'description'
  | 'link'
  | 'contact_support'
  | 'question_answer'
  | string;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20, ...props }) => {
  const normName = name.toLowerCase().trim();

  switch (normName) {
    case 'download':
    case 'download_for_offline':
      return <Download className={className} size={size} {...props} />;
    case 'install_mobile':
    case 'phone_iphone':
      return <Smartphone className={className} size={size} {...props} />;
    case 'play_arrow':
      return <Play className={className} size={size} fill="currentColor" {...props} />;
    case 'menu':
      return <Menu className={className} size={size} {...props} />;
    case 'close':
      return <X className={className} size={size} {...props} />;
    case 'chat':
    case 'chat_bubble':
      return <MessageSquare className={className} size={size} {...props} />;
    case 'question_answer':
      return <MessagesSquare className={className} size={size} {...props} />;
    case 'call':
      return <Phone className={className} size={size} {...props} />;
    case 'videocam':
    case 'video_chat':
      return <Video className={className} size={size} {...props} />;
    case 'star':
      return <Star className={className} size={size} fill="currentColor" {...props} />;
    case 'verified_user':
      return <ShieldCheck className={className} size={size} {...props} />;
    case 'shield':
      return <Shield className={className} size={size} {...props} />;
    case 'account_balance_wallet':
      return <Wallet className={className} size={size} {...props} />;
    case 'smart_toy':
      return <Bot className={className} size={size} {...props} />;
    case 'psychology':
      return <Brain className={className} size={size} {...props} />;
    case 'wb_sunny':
      return <Sun className={className} size={size} {...props} />;
    case 'pan_tool':
      return <Hand className={className} size={size} {...props} />;
    case 'person_search':
    case 'video_search':
      return <Search className={className} size={size} {...props} />;
    case 'send':
      return <Send className={className} size={size} {...props} />;
    case 'arrow_forward':
      return <ArrowRight className={className} size={size} {...props} />;
    case 'arrow_back':
      return <ArrowLeft className={className} size={size} {...props} />;
    case 'arrow_upward':
      return <ArrowUp className={className} size={size} {...props} />;
    case 'home':
      return <Home className={className} size={size} {...props} />;
    case 'insights':
      return <Sparkles className={className} size={size} {...props} />;
    case 'gavel':
      return <Scale className={className} size={size} {...props} />;
    case 'description':
      return <FileText className={className} size={size} {...props} />;
    case 'link':
      return <LinkIcon className={className} size={size} {...props} />;
    case 'contact_support':
      return <HelpCircle className={className} size={size} {...props} />;
    case 'person':
      return <User className={className} size={size} {...props} />;
    case 'explore':
      return <Compass className={className} size={size} {...props} />;
    case 'today':
      return <Calendar className={className} size={size} {...props} />;
    case 'date_range':
      return <CalendarDays className={className} size={size} {...props} />;
    case 'summarize':
      return <FileCheck className={className} size={size} {...props} />;
    case 'check':
    case 'check_circle':
      return <CheckCircle className={className} size={size} {...props} />;
    default:
      return <Compass className={className} size={size} {...props} />;
  }
};
