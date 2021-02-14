import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
})

const WrapperImage = styled.div`
  position: relative;
  margin: 20px;
  margin-bottom: 10px;
  padding-top: 10px;

  &:hover > button {
    display: block;
  }
`

const Image = styled.img`
  display: block;
  width: 200px;
  height: 200px;

  object-fit: cover;
`
const Button = styled.button({
  position: 'absolute',
  display: 'none',
  top: '-20px',
  right: '-10px',
  borderStyle: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
  fontSize: '30px',
})

const EmptyBlock = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 200px;
  color: #c3c3c3;
`

function PhotoManagerGallery(props) {
  const onDelete = (evt) => {
    props.onDelete(evt.target.dataset.id)
  }

  const images = props.images.map((image) => (
    <WrapperImage key={image.id}>
      <Image src={image.src} alt={image.name}></Image>
      <Button data-id={image.id} onClick={onDelete}>
        ✘
      </Button>
    </WrapperImage>
  ))

  let emptyBlocks = []

  if (images.length < 3) {
    while (images.length + emptyBlocks.length < 3) {
      emptyBlocks.push(
        <EmptyBlock key={nanoid()} className="material-icons">
          border_clear
        </EmptyBlock>
      )
    }
  } else {
    emptyBlocks.push(
      <EmptyBlock key={nanoid()} className="material-icons">
        border_clear
      </EmptyBlock>
    )
  }

  return (
    <Container>
      {images}
      {emptyBlocks}
    </Container>
  )
}

PhotoManagerGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PhotoManagerGallery
