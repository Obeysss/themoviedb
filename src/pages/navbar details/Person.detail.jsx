import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import personinfo from '../../repositories/personinfo';
import PersonMovieCredits from '../../repositories/personmoviecredits';
import { baseUrl, imgBaseUrl } from '../../repositories/repository';
import './Person.detail.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PersonDetails() {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showFullBio, setShowFullBio] = useState(false);
  const [personMovieCredits, setPersonMovieCredits] = useState([]);

  console.log(personDetails);


  async function getPersonById(id) {
    const currentPerson = await personinfo.getPersonById(id);
    setPersonDetails(currentPerson);
    setIsLoading(false);
  }

  async function getPersonMovieCredits(id) {
    const currentPersonMovieCredits = await PersonMovieCredits.getPersonMovieCredits(id);
    setPersonMovieCredits(currentPersonMovieCredits);
    setIsLoading(false);
  }

  useEffect(() => {
    getPersonById(id);
    getPersonMovieCredits(id);
  }, [id]);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  const renderBio = () => {
    if (personDetails.biography && personDetails.biography.length > 0) {
      if (showFullBio) {
        return personDetails.biography;
      } else {
        const words = personDetails.biography.split(' ');
        const truncatedBio = words.slice(0, 38).join(' ');
        return truncatedBio + ' ...';
      }
    }
    return '';
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && personDetails ? (
        <div className='personDetails'>
          <div className='personDetails-flexing'>
            <div className='personDetails-flexing-left'>
              <img className='personDetails-flexing-left-img' src={personDetails.profile_path ? imgBaseUrl + personDetails.profile_path : 'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg'} alt="" />
              <div className='personDetails-flexing-right-know'>Know For</div>
               <p className='departamner'>{personDetails.known_for_department}</p>
               <div className='personDetails-flexing-right-know'>Birthday</div>
               <p className='departamner'>{personDetails.birthday}</p>
               <div className='personDetails-flexing-right-know'>Place of Birth</div>
               <p className='departamner'>{personDetails.place_of_birth}</p>
               <div className='personDetails-flexing-right-know'>Also Known As</div>
               <p className='departamner'>
  {personDetails.also_known_as.map((name, index) => (
    <React.Fragment key={index}>
      {name}
      {index !== personDetails.also_known_as.length - 1 && <br />}
    </React.Fragment>
  ))}
</p>



               

            </div>
            <div className="personDetails-flexing-right">
              <div className='personDetails-flexing-right-title'>{personDetails.name}</div>
              <div className='personDetails-flexing-right-bio'>Biography</div>
              <div className={`personDetails-flexing-right-biography ${showFullBio ? 'expanded' : ''}`}>
                {renderBio()}
                {personDetails.biography && personDetails.biography.length > 27 && (
                  <button className='read-more' onClick={toggleBio}>
                    {showFullBio ? <span>Read Less <i className="fa-solid fa-arrow-left"></i></span>  : <span>Read More</span>}
                  </button>
                )}
              </div>
              <div className='personDetails-flexing-right-know'>Know For</div>
              <div className="personCredits-flexing">
                {
                  personMovieCredits && personMovieCredits.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link className="Link" to={`/movie/${item.id}`}>
                         {
                          (item.poster_path) ?
                          <LazyLoadImage
                          effect="blur "
                          src={imgBaseUrl + item.poster_path}
                          alt={item.title}
                          className="personCredits-flexing-img"
                        />
                        :
                        <LazyLoadImage
                        effect="blur "
                        src={'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'}
                        alt={item.title}
                        className="personCredits-flexing-img"
                      />
                         }
                        </Link>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
