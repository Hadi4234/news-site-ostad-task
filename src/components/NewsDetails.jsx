import React from 'react';
import parse from 'html-react-parser';
const NewsDetails = (props) => {
    return (
            <div className="mt-5 md:pl-5 md:pr-5">
                <h2 className="text-2xl font-semibold">{props.details['title']}</h2>
                <hr className=""/>
                <div className="flex flex-row">
                    <div className="mt-5">
                          <img className="w-full" src={props.details['img1']}/>
                          {parse(`${props.details['long_des']}`)}
                    </div>
                </div>
            </div>
    );
};

export default NewsDetails;