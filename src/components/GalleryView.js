import React from 'react'
import { Styles } from './common/styles/gallery'
import Modal from 'react-modal'
import Image from "next/legacy/image";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const GalleryView = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)
  const [modalIsOpen3, setIsOpen3] = React.useState(false)
  const [modalIsOpen4, setIsOpen4] = React.useState(false)
  const [modalIsOpen5, setIsOpen5] = React.useState(false)
  const [modalIsOpen6, setIsOpen6] = React.useState(false)
  const [modalIsOpen7, setIsOpen7] = React.useState(false)
  const [modalIsOpen8, setIsOpen8] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function openModal2() {
    setIsOpen2(true)
  }
  function openModal3() {
    setIsOpen3(true)
  }
  function openModal4() {
    setIsOpen4(true)
  }
  function openModal5() {
    setIsOpen5(true)
  }
  function openModal6() {
    setIsOpen6(true)
  }
  function openModal7() {
    setIsOpen7(true)
  }
  function openModal8() {
    setIsOpen8(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }
  function closeModal() {
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  return (
    <>
      <Styles>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={290}
                height={228}
                src="/assets/images/APJ.jpg"
                alt="APJ"
              />
            </div>

            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                APJ Abdul Kalam
              </h2>
              <p>
                It was no less than a “lifetime achievement” for Shoolini
                students to receive degrees and medals from former President of
                India Dr APJ Abdul Kalam at the first convocation. Motivating
                everyone with his powerful speech, he said, “India needs to
                graduate into knowledge and innovative research to emerge as a
                leader in real terms.” Dr Kalam had high words of praise for
                Shoolini University: “I am happy about how Shoolini University
                has adopted a research-driven model and is providing value-based
                quality education to students of all sections of society.
                Shoolini University should set a target to be among the top 100
                global universities in the coming years.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={230}
                height={181}
                src="/assets/images/DrRobert.jpg"
                alt="Dr Robert Huber"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Dr Robert Huber
              </h2>
              <p>
                Dr Robert Huber, a German biochemist and Nobel laureate attended
                the Second Convocation of Shoolini University as the chief
                guest. He was awarded the Nobel Prize in Chemistry in the year
                1988 for the determination of the three-dimensional structure of
                a photosynthetic reaction. <br /> <br />
                As many as 1573 degrees were awarded at the convocation, out of
                which 745 were undergraduate, 710 postgraduate, 65 MPhil and 53
                doctorates. Urging students to become noble human beings, Dr
                Huber said, “It was a privilege to look into the eyes of
                graduating students as they are blooming with joy and their
                faces filled with aspirations.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen3}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={230}
                height={230}
                src="/assets/images/gal3.png"
                alt="Kiran Bedi"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Kiran Bedi</h2>
              <p>
                Lieutenant Governor of Puducherry and the first woman to join
                the Indian Police Service (IPS), Dr Kiran Bedi, had a stellar
                interaction with the audience during the Yogananda Guru Series
                of Webinars. She urged students to run the extra mile and
                prepare themselves for an enriched and fulfilling life.
                Addressing students, she said, “Education is knowledge, it is
                all about your skill set… how you become a better human being,
                how you become self-reliant and possess a value system. It’s not
                just about passing examinations. Dr Bedi advised students to
                follow the path of right thinking and the right lifestyle.
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen4}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={290}
                height={290}
                src="/assets/images/gal4.png"
                alt="Yuvraj Singh"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Yuvraj Singh </h2>
              <p>
                Cricketing legend Yuvraj Singh visited the Shoolini University
                campus amid great fanfare and excitement. This philanthropist
                inaugurated our cricket stadium that is named after him and an
                offsite centre for his foundation ‘YouWeCan’, in collaboration
                with the students. Speaking on the occasion, Yuvi said, “I am
                always the happiest being around young, energetic and positive
                minds. This is what I have witnessed here at Shoolini
                University.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen5}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={230}
                height={180}
                src="/assets/images/RaviShankar.jpg"
                alt="Shri Shri Ravi Shankar"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Shri Shri Ravi Shankar
              </h2>
              <p>
                Founder of the Art of Living Foundation and International
                Association for Human Values, Shri Shri Ravi Shankar, conferred
                degrees on 1,617 students of Shoolini University during its
                third convocation. While addressing the students at the campus,
                Shri Shri said, “One should remember three things in life —
                meditation, which is the solution for anxiety and insecurity,
                courage to face humiliation and ability to adapt to all
                situations and live in the present moment.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen6}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={200}
                height={138}
                src="/assets/images/gal6.png"
                alt="Gaurav Kapur"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Gaurav Kapur</h2>
              <p>
                Gaurav Kapur, Founder Oaktree Sports, Cricket Presenter and
                Commentator talked about his fascinating journey to success and
                glory on the virtual platform of Yogananda Guru Series of
                Webinars. Sharing his life’s failures and achievements, he
                revealed how his life took a turnaround at the age of 17, when
                he got the opportunity to work with FM radio. A firm believer in
                storytelling, he urged educators, “Storytelling is very
                important for educators. Learning anything in a story format is
                fun and gets stored in the right section of the brain. However,
                it becomes impossible to forget it then.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen7}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={220}
                height={220}
                src="/assets/images/gal7.png"
                alt="Anupam Kher"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Anupam Kher </h2>
              <p>
                An iconic actor, Anupam Kher has worked in more than 400 films
                and has won two National Film Awards, besides several other
                prestigious awards. He enthralled the audience at the virtual
                event, ‘Ideas that Matter’. Thousands of teachers and students
                from north India attended the event. Emphasising that failures
                were a part of life, he said, “Failure teaches you more than
                success, so cherish it and face it fearlessly.”
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpen8}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
          <div className="myModal">
            <div className="imgModal">
              <Image
                width={240}
                height={190}
                src="/assets/images/MilkhaSingh.jpg"
                alt="Milkha Singh"
              />
            </div>
            <div className="modalText">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Flying Sikh&apos; Milkha Singh
              </h2>
              <p>
                The sporting legend, also known as Flying Sikh&apos;, Milkha
                Singh inaugurated an indoor sports complex named after him as
                Milkha Singh Sports Complex. Encouraging the students to work
                hard, he emphasised that hard work was even more important than
                competence. &quot;The youth are the future of the nation and
                must work hard to bring glory to the nation. While addressing
                the students, he said, &quot;No matter who becomes our Prime
                Minister, no one can completely eradicate poverty from the
                country. We as citizens need to contribute and do our bit in the
                eradication of poverty and development of the nation”.
              </p>
            </div>
          </div>
        </Modal>

        <section className="pb-5 galleryViewER bg-white">
          <div className=" mt-0 galleryView">
            <div className="gal_container">
              <div className="row1">
                <div className="one galImage">
                  <Image
                    layout="fill"
                    onClick={openModal}
                    src="/assets/images/APJ.jpg"
                    alt="APJ"
                  />
                </div>
                <div className="two galImage">
                  <Image
                    layout="fill"
                    onClick={openModal2}
                    src="/assets/images/DrRobert.jpg"
                    alt="DrRobert"
                  />
                </div>
                <div className="three galImage">
                  <Image
                    layout="fill"
                    onClick={openModal3}
                    src="/assets/images/gal3.png"
                    alt="gal3"
                  />
                </div>
                <div className="four galImage">
                  <Image
                    layout="fill"
                    onClick={openModal4}
                    src="/assets/images/gal4.png"
                    alt="gal4"
                  />
                </div>
              </div>
              <div id="section">
                <h1>Think Inspiration</h1>
                <p>from Nobel Laureates, Presidents, leaders and achievers</p>
                <div className="vewGal"></div>
              </div>
              <div className="row1">
                <div className="five galImage">
                  <Image
                    layout="fill"
                    onClick={openModal5}
                    src="/assets/images/RaviShankar.jpg"
                    alt="RaviShankar"
                  />
                </div>
                <div className="six galImage">
                  <Image
                    layout="fill"
                    onClick={openModal6}
                    src="/assets/images/gal6.png"
                    alt="gal6"
                  />
                </div>
                <div className="seven galImage">
                  <Image
                    layout="fill"
                    onClick={openModal7}
                    src="/assets/images/gal7.png"
                    alt="gal7"
                  />
                </div>
                <div className="eight galImage">
                  <Image
                    layout="fill"
                    onClick={openModal8}
                    src="/assets/images/MilkhaSingh.jpg"
                    alt="MilkhaSingh"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Styles>
    </>
  )
}

export default GalleryView
