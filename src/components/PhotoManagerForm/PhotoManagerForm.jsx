import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputOverlapped = styled.input`
  clip: rect(0, 0, 0, 0);
  position: absolute;
`

const Container = styled.div`
  width: 1200px;
  position: relative;
`

const Overlap = styled.label`
  width: 100%;
  height: 300px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 3rem;

  input:focus + & {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
    outline-offset: 6px;
  }
`

function PhotoManagerForm(props) {
  const onSelect = (evt) => {
    const files = Array.from(evt.target.files).filter((el) => el.type.match(/image\/./))

    if (files.length) {
      props.onSelect(evt)
    }
    evt.target.value = null
  }
  return (
    <div className="PhotoManagerForm">
      <Container>
        <InputOverlapped id="file" type="file" multiple onChange={onSelect} />
        <Overlap htmlFor="file">Click to select</Overlap>
      </Container>
    </div>
  )
}

PhotoManagerForm.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

export default PhotoManagerForm
