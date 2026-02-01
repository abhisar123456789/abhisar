import { useState } from 'react';
import { Upload, User, Image } from 'lucide-react';

interface PhotoUploadSlotProps {
  type?: 'profile' | 'experience' | 'project';
  className?: string;
  label?: string;
}

const PhotoUploadSlot = ({ type = 'experience', className = '', label }: PhotoUploadSlotProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getDefaultSize = () => {
    switch (type) {
      case 'profile':
        return 'w-32 h-32 md:w-40 md:h-40';
      case 'project':
        return 'w-full aspect-video';
      default:
        return 'w-full h-48';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'profile':
        return <User className="w-12 h-12 text-muted-foreground/50" />;
      default:
        return <Image className="w-8 h-8 text-muted-foreground/50" />;
    }
  };

  return (
    <label className={`photo-upload-slot cursor-pointer ${getDefaultSize()} ${className} ${type === 'profile' ? 'rounded-full' : ''}`}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      {image ? (
        <img
          src={image}
          alt={label || 'Uploaded photo'}
          className={`w-full h-full object-cover ${type === 'profile' ? 'rounded-full' : 'rounded-2xl'}`}
        />
      ) : (
        <div className="photo-upload-slot-content flex flex-col items-center gap-2">
          {getIcon()}
          <div className="flex items-center gap-1 text-sm">
            <Upload className="w-4 h-4" />
            <span>{label || 'Upload Photo'}</span>
          </div>
        </div>
      )}
    </label>
  );
};

export default PhotoUploadSlot;
