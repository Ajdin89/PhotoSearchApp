import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const imgs = props.propImages.map((image) => {
		return <ImageCard key={image.id} images={image} />;
	});
	return <div className='image-list'>{imgs}</div>;
};

export default ImageList;
