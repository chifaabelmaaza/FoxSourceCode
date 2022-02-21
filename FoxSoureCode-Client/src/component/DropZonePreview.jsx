import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import DeleteIcon from '@mui/icons-material/Delete';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 120,
  height: 120,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '50%',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function DropZonePreview(props) {
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const handleOpen = (file) => {
    setSelectedFile(file);

    setOpen(true);
  };

  useEffect(() => {
    // console.log(files)
    props.setImages(files);
  }, [files]);
  const handleClose = () => setOpen(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: props.accpet ? props.accpet : 'image/*',
    maxFiles: props.maxFiles !== 0 ? props.maxFiles : 0,
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) => {
        if (!files.includes(file)) {
          props.maxFiles === 1
            ? setFiles([file])
            : setFiles((files) => [...files, file]);
        }
      });
    },
  });

  const deleteImage = (fl) => {
    setFiles(files.filter((file) => file !== fl));
    props.setImages(files.filter((file) => file !== fl));
  };

  const thumbs = files.map((file) => {
    const image = URL.createObjectURL(file);

    return (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <div className='tw-relative'>
            <img
              src={image}
              style={img}
              alt={image}
              onClick={() => handleOpen(image)}
            />
            {/* <button
              className='tw-absolute tw-top-0 tw-right-0 tw-bg-gray-900 tw-text-gray-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-p-1'
              onClick={() => deleteImage(file)}
            >
              <DeleteIcon className='tw-text-gray-100' sx={{ fontSize: 18 }} />
            </button> */}
          </div>
        </div>
      </div>
    );
  });

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone w-100' })}>
        <input {...getInputProps()} />
        <p className='text-center'>
          {props.children}
          <UploadOutlinedIcon />
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}
