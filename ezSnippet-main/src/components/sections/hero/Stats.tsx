import List from '@/components/ui/List';
import { Eye, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <div className="hidden md:flex flex-col w-max px-4 gap-5 text-info">
            <List link="/instagram" sizes="xs" className="gap-4">
                <User size={16} />
                <span>
                    <b className="text-secondary">517</b> Members
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <Video size={16} />
                <span>
                    <b className="text-secondary">10+</b> Offline events
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <Eye size={16} />
                <span>
                    <b className="text-secondary">20+</b> Virtual Events
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <ThumbsUp size={16} />
                <span>
                    <b className="text-secondary">10000+</b> Reach
                </span>
            </List>
        </div>
    );
};

export default Stats;
