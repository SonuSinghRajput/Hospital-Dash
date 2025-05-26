
import images from '../assets/anatomy.png'

export default function AnatomySection() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
     
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <img 
          src={images}
          alt="Anatomy Graphic" 
          className="object-contain h-full"
        />
      </div>
    </div>
  );
}
