/* eslint-disable arrow-body-style */
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export const UploadPhoto = () => {
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	})
	return (
		<div
			{...getRootProps()}
			style={{
				width: '100%',
				height: '240px',
				borderRadius: '12px',
				border: '3px dashed #BBC1C7',
				alignContent: 'center',
				backgroundColor: '#F2F5FA',
				color: '#BBC1C7',
			}}
		>
			<AddCircleOutlineIcon />
			<input {...getInputProps()} />
			{isDragActive ?
				<p>Suelta aquí...</p>
			:	<p>Añadir nueva foto</p>}
		</div>
	)
}
