import React from 'react'
import { Row, Col, Badge } from 'reactstrap'

const TodoFooter = props => {

  const clearComplete = () => props.clearComplete()

  return (
    <React.Fragment>
      <Row className='w-60 mt-5 d-flex align-items-baseline'>
        <Col md={3}>
          <span>{props.totalItem} items left</span>
        </Col>
        <Col md={6} className='d-flex justify-content-around'>
          <span className='filter-option cursor-pointer'>
            <Badge color="primary">All</Badge>
          </span>
          <span className='filter-option cursor-pointer'>
            <Badge color="secondary">Active</Badge>
          </span>
          <span className='filter-option cursor-pointer'>
            <Badge color="secondary">Done</Badge>
          </span>
        </Col>
        <Col md={3}>
          <span className='cursor-pointer hover-red' onClick={clearComplete}>Clear complete</span>
        </Col>
      </Row>
    </React.Fragment>
  )

}

export default TodoFooter
