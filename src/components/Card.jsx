import React from 'react';

export default function Card(props) {
    return (
        <section>
            <div className="card">
                <div>
                    <img src={`../images/${props.entry.image}`} alt="Mount Fuji" className="card--image"/>
                </div>
                <div className="card--info">
                    <h4 className="card--country">
                        <i class="fa-solid fa-location-dot"></i>
                        {props.entry.location}
                        <span className="google-map"> <a href={props.entry.googleMapsUrl}>View on Google Maps</a></span>
                    </h4>
                    <h3 className="card--title">{props.entry.title}</h3>
                    <p className="card--date">{props.entry.startDate} - {props.entry.endDate}</p>
                    <p className="card--summary">{props.entry.description}</p>
                </div>
                <div className="card--border"></div>
            </div>
        </section>
    )
}