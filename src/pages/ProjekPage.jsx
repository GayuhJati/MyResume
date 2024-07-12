import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import React from "react";
import PropTypes from "prop-types";

export const ProjekPage = () => {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <div className="flex-shrink-0">
        <section className="py-5">
          <Container className="px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="text-start mb-5">
              <h2 className="fw-bolder mb-0"><span className="text-secondary">Creative</span></h2>
            </div>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                  <h2 className="fw-bolder">Lyric Video of Anak Baik-Baik Newest Single</h2>
                  <span>In this project I had the opportunity and responsibility to make a lyric video of a new soloist with his single "Ada Aku Disini". In this video, the client asked to make a simple and minimalist lyric video with minimal revisions. This concept is taken from a person who has just become a father with his simplicity seen from the plain shirt and sarong worn and the white wall. </span>
                  </div>
                    <iframe width="300" height="400"src={`https://www.youtube.com/embed/Wje0e-xm284`}/>
                  </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                  <h2 className="fw-bolder">Editor in Aftermovie video of HUT SMANSA 60th</h2>
                  <span>In this project, I was trusted to be the editor for the aftermovie of a school birthday activity in Klaten. In this activity I was given many videos from various sources and cameras with different camera settings. This became my own challenge with the existing video assets combined into one video. And I was quite successful in outsmarting and making the video watchable.</span>
                  </div>
                    <iframe width="300" height="400"src={`https://www.youtube.com/embed/aQZkrt2zPsg?si=3B8zO7dU5OfvKzPr`}/>
                  </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                  <h2 className="fw-bolder">Editor in audio visualizer of Official Jingle in HUT Salvaloticla</h2>
                  <span>In this project, I was trusted to be the editor for the aftermovie of a school birthday activity in Klaten. In this activity I was given many videos from various sources and cameras with different camera settings. This became my own challenge with the existing video assets combined into one video. And I was quite successful in outsmarting and making the video watchable.</span>
                  </div>
                    <iframe width="300" height="400"src={`https://www.youtube.com/embed/ip6Hxu1LJvM?si=ei4wpa-IBJevLsCl`}/>
                  </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                  <h2 className="fw-bolder">Lead of creative division</h2>
                  <span>In this project, I was trusted to be the head of the creative division by proposing the concept of shooting in the forest. This project became the project with the most budget at that time. With a pretty good decor. And the logo was made with quite a long time too. I gave the idea to maximize the shooting of the english night event trailer with a more mature concept and more prepared than the english night trailer in the previous year.</span>
                  </div>
                    <iframe width="300" height="400"src={`https://www.youtube.com/embed/s6nxJW3UJak`}/>
                  </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                  <h2 className="fw-bolder">Editor in Video Profile of Bulu Village</h2>
                  <span>During our KKN period, we had a plan to make a profile video for the village. I happened to be entrusted with making the video. I had the concept of taking interesting and prominent elements of the village to be the material for the video that would be exhibited. </span>
                  </div>
                    <iframe width="300" height="400"src={`https://www.youtube.com/embed/NpOaEOZFPWw`}/>
                  </div>
              </Card.Body>
            </Card>
          </Container>
        </section>

      </div>
    </div>
  )
}
