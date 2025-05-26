
import HealthCard from './HealthCard';
import lungsIcon from '../assets/lungs.png';
import teethIcon from '../assets/teeth.png';
import boneIcon from '../assets/bone.png';

export default function HealthStatusCards() {
  const healthData = [
    {
      icon: lungsIcon,
      title: 'Lungs',
      date: '26 Okt 2021',
      progress: 20,
      color: '#ef4444', 
    },
    {
      icon: teethIcon,
      title: 'Teeth',
      date: '26 Okt 2021',
      progress: 80,
      color: '#10b981', 
    },
    {
      icon: boneIcon,
      title: 'Bone',
      date: '26 Okt 2021',
      progress: 30,
      color: '#f97316', 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-4">
      {healthData.map((card) => (
        <HealthCard key={card.title} {...card} />
      ))}
    </div>
  );
}
