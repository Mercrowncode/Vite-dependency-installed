import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (urls: string[]) => void;
  onError: (error: string) => void;
}

export function ImageUpload({ onUpload, onError }: ImageUploadProps) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
      if (imageFiles.length === 0) {
        onError('Please upload image files only');
        return;
      }

      // Handle image upload here
      onUpload(['https://example.com/placeholder.jpg']); // Temporary placeholder
    } catch (error) {
      onError('Failed to upload images');
    }
  }, [onUpload, onError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: true
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
      {isDragActive ? (
        <p className="mt-2 text-muted-foreground">Drop the images here...</p>
      ) : (
        <p className="mt-2 text-muted-foreground">
          Drag & drop images here, or click to select files
        </p>
      )}
    </div>
  );
}