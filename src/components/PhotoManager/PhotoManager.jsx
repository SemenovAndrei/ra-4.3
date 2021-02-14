import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PhotoManagerForm from '../PhotoManagerForm/PhotoManagerForm'
import { nanoid } from 'nanoid'
import PhotoManagerGallery from '../PhotoManagerGallery/PhotoManagerGallery'

const Wrapper = styled.div`
  margin-top: 50px;
`

function PhotoManager(props) {
  const [images, setImages] = useState(props.images)

  const handleSelect = (evt) => {
    let files = [...evt.target.files]
    files.forEach((file) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        file.id = nanoid()

        file.src = fileReader.result
        setImages((prev) => [...prev, file])
      }
      fileReader.readAsDataURL(file)
    })
    document.getElementById('file').blur()
  }

  const handleDelete = (id) => {
    setImages(() => images.filter((image) => image.id !== id))
  }

  return (
    <Wrapper>
      <PhotoManagerForm onSelect={handleSelect} />
      <PhotoManagerGallery images={images} onDelete={handleDelete} />
    </Wrapper>
  )
}

PhotoManager.defaultProps = {
  images: [],
}

PhotoManager.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}

export default PhotoManager
