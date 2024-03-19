import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type RatingSmallHighlightCardProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    rating: Field<number>;
    numberOfReviews: Field<number>;
    blurb: Field<string>;
  };
};

enum EnumRatings {
  stars_00 = 0,
  stars_05 = 0.5,
  stars_10 = 1,
  stars_15 = 1.5,
  stars_20 = 2,
  stars_25 = 2.5,
  stars_30 = 3,
  stars_35 = 3.5,
  stars_40 = 4,
  stars_45 = 4.5,
  stars_50 = 5,
}

// constant to help determine whether to round up/down to the nearest half star
const rdcst = 0.25;
/*
Take in the numeric rating and return the class style to assign the number of half stars.
We will round up to the nearest half-star. 
This replicates the current logic from what I can tell.
- HFL 20240117
*/
function getRatingStyle(inRating: number) {
  let starClass = 'star ';
  if (EnumRatings.stars_45 + rdcst < inRating) {
    // five stars
    starClass = starClass + EnumRatings[EnumRatings.stars_50];
  } else if (EnumRatings.stars_40 + rdcst < inRating) {
    // four and a half stars
    starClass = starClass + EnumRatings[EnumRatings.stars_45];
  } else if (EnumRatings.stars_35 + rdcst < inRating) {
    // four stars
    starClass = starClass + EnumRatings[EnumRatings.stars_40];
  } else if (EnumRatings.stars_30 + rdcst < inRating) {
    // three and a half stars
    starClass = starClass + EnumRatings[EnumRatings.stars_35];
  } else if (EnumRatings.stars_25 + rdcst < inRating) {
    // three stars
    starClass = starClass + EnumRatings[EnumRatings.stars_30];
  } else if (EnumRatings.stars_20 + rdcst < inRating) {
    // two and a half stars
    starClass = starClass + EnumRatings[EnumRatings.stars_25];
  } else if (EnumRatings.stars_15 + rdcst < inRating) {
    // two stars
    starClass = starClass + EnumRatings[EnumRatings.stars_20];
  } else if (EnumRatings.stars_10 + rdcst < inRating) {
    // one and a half stars
    starClass = starClass + EnumRatings[EnumRatings.stars_15];
  } else if (EnumRatings.stars_05 + rdcst < inRating) {
    // one star
    starClass = starClass + EnumRatings[EnumRatings.stars_10];
  } else if (EnumRatings.stars_00 + rdcst < inRating) {
    // half star
    starClass = starClass + EnumRatings[EnumRatings.stars_05];
  } else {
    // zero stars... oh my
    starClass = starClass + EnumRatings[EnumRatings.stars_00];
  }
  return starClass;
}

const RatingSmallHighlightCardHorizontalVariant = (
  props: RatingSmallHighlightCardProps
): JSX.Element => (
  <div className="pm-ratings-small">
    <div className={getRatingStyle(props.fields.rating?.value)}></div>
    <Text field={props.fields.rating} tag="span" />
    <span>({props.fields.numberOfReviews?.value})</span>
  </div>
);

export const RatingSmallHighlightCardHorizontal =
  withDatasourceCheck()<RatingSmallHighlightCardProps>(RatingSmallHighlightCardHorizontalVariant);

const RatingSmallHighlightCardVerticalVariant = (
  props: RatingSmallHighlightCardProps
): JSX.Element => (
  <div>
    <div className="pm-ratings-small-vertical">
      <p>Average Rating</p>
      <div className="ratings-container">
        <Text field={props.fields.rating} />
        <div className={getRatingStyle(props.fields.rating?.value)}></div>
      </div>
    </div>
    <div className="pm-ratings-small-vertical-blurb">
      <h4>
        <Text field={props.fields.numberOfReviews} />
        &nbsp;reviews
      </h4>
      <Text field={props.fields.blurb} tag="p" />
    </div>
  </div>
);

export const RatingSmallHighlightCardVertical =
  withDatasourceCheck()<RatingSmallHighlightCardProps>(RatingSmallHighlightCardVerticalVariant);
