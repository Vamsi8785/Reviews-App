import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsListiItemIndex: 0}

  onClickLeftArrow = () => {
    const {reviewsListiItemIndex} = this.state

    if (reviewsListiItemIndex > 0) {
      this.setState(preValue => ({
        reviewsListiItemIndex: preValue.reviewsListiItemIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {reviewsListiItemIndex} = this.state

    if (reviewsListiItemIndex < reviewsList.length - 1) {
      this.setState(preValue => ({
        reviewsListiItemIndex: preValue.reviewsListiItemIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewsListiItemIndex} = this.state
    const currentReviewDetails = reviewsList[reviewsListiItemIndex]
    return (
      <div className="reviews-app">
        <div className="arrows-buttons-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow-button"
            onClick={this.onClickLeftArrow}
          >
            <img
              className="arrow-image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="company-review">
            <h1 className="reviews-app-heading">Reviews</h1>
            <img
              className="progile-image"
              src={currentReviewDetails.imgUrl}
              alt={currentReviewDetails.username}
            />
            <p className="username">{currentReviewDetails.username}</p>
            <p className="companyName">{currentReviewDetails.companyName}</p>
            <p className="description">{currentReviewDetails.description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="arrow-button"
            onClick={this.onClickRightArrow}
          >
            <img
              className="arrow-image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
