/* eslint-disable react/prop-types */
import { useCreateBlog, useUpdateBlog } from '@/hooks/blog.hook';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import QuillEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '../ui/button';

const ContentForm = ({ setIsOpen, blog, isEdit = false }) => {
  const [title, setTitle] = React.useState('');
  const inputRef = React.useRef(null);
  const [imageFile, setImageFile] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const { mutate: createBlog, isPending: createPending } = useCreateBlog();
  const { mutate: updateBlog, isPending: updatePending } = useUpdateBlog();

  const { content, thumbnail, title: blogTitle, _id: blogId } = blog || {};

  React.useEffect(() => {
    if (isEdit) {
      setValue(content);
      if (thumbnail) {
        setImageFile(thumbnail);
      }
      setTitle(blogTitle);
    }
  }, [isEdit, blogTitle, blog, content, thumbnail]);

  function handler() {
    const formData = new FormData();
    const blogData = {
      content: value,
      title,
    };

    formData.append('data', JSON.stringify(blogData));

    if (imageFile) {
      formData.append('image', imageFile);
    }

    if (isEdit) {
      updateBlog(
        {
          blogData: formData,
          blogId,
        },
        {
          onSuccess: () => {
            setIsOpen(false);
          },
        }
      );

      return;
    }

    createBlog(formData, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  }

  const handleOnChangeImage = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      setImageFile(imgFile);
    }
  };

  const handleImage = () => {
    inputRef.current?.click();
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ color: [] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link'],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
  ];

  return (
    <div>
      <div className='extraOutline border-primary border-[3px] border-dashed w-full h-[383px] mb-6 row-span-2 mx-auto rounded-lg'>
        <div
          onClick={handleImage}
          className='file_upload h-[383px] relative rounded-lg cursor-pointer'
        >
          {imageFile ? (
            typeof imageFile === 'string' ? (
              // If it's a URL, render it directly
              <img
                className='w-full h-[378px] object-cover rounded-md'
                src={imageFile}
                alt='Uploaded Thumbnail'
              />
            ) : (
              // If it's a file, create a URL for it
              <img
                className='w-full h-[378px] object-cover rounded-md'
                src={URL.createObjectURL(imageFile)} // Only call this if it's a File
                alt='Uploaded Thumbnail'
              />
            )
          ) : (
            <div className='py-32'>
              <svg
                className='text-primary w-16 mx-auto '
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <p className='text-center text-primary tracking-tight text-xl sm:text-3xl'>
                Choose a Thumbnail
              </p>
            </div>
          )}
          <div className='input_field flex flex-col w-max mx-auto text-center'>
            <input
              ref={inputRef}
              onChange={handleOnChangeImage}
              className='hidden' // Hide the input field
              type='file'
              accept='image/*' // Ensure only images are accepted
            />
          </div>
        </div>
      </div>

      <label htmlFor='title' className='font-semibold'>
        Title
      </label>
      <input
        name='title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border border-stone-300 px-4 py-3 w-full rounded-md outline-none mb-10'
      />

      <label className='font-semibold'>Blog content</label>
      <QuillEditor
        className='h-[300px] mt-0.5'
        theme='snow'
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />

      <Button className='mt-20 w-20' onClick={handler}>
        {createPending || updatePending ? (
          <RotatingLines height='15' width='15' radius='5' strokeColor='#fff' />
        ) : (
          'Submit'
        )}
      </Button>
    </div>
  );
};

export default ContentForm;
