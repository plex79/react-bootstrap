import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';


class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} className="about-container">
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Me</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at tempore quod enim ab debitis minima necessitatibus ut ipsa eaque expedita laborum fugiat fugit accusamus obcaecati, unde corrupti! Rerum, unde.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quidem mollitia repellendus ipsum, similique natus quas illum fugit molestias. Tenetur culpa, consequuntur commodi possimus iure unde quo ea porro officiis facere earum quod eum adipisci cum beatae debitis minima omnis perferendis. Eligendi quasi eos, rerum blanditiis ad dolores laboriosam ipsam officiis aliquid alias modi officia aperiam voluptatibus doloremque cumque ea. Enim rerum doloremque, quis incidunt similique error sed, obcaecati inventore sint suscipit maiores beatae asperiores mollitia! Quo tenetur dolor at rem cum doloremque praesentium consectetur dolore animi? Mollitia voluptatem in magnam voluptates autem cupiditate, illum, quisquam, esse architecto possimus fugit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad sint architecto eaque nihil suscipit animi aut facere iste dolor hic iusto repudiandae tempore reprehenderit, ut obcaecati nemo? Soluta possimus vel culpa aspernatur, quae earum itaque rem quisquam vitae. Voluptate mollitia dicta cupiditate voluptatibus eos, aliquam illo ipsa pariatur possimus? Reiciendis at quaerat vero eveniet voluptates doloremque repudiandae asperiores laboriosam ab dolorem? Nisi, deserunt vel impedit corrupti necessitatibus ut iusto perspiciatis quas ad magnam rem, quod cupiditate amet quos accusantium molestiae esse quis nobis qui nulla. Voluptates eum distinctio mollitia dolore reprehenderit repellat veniam quas iste. Qui, delectus debitis. Debitis culpa ea reiciendis id perferendis nihil harum vitae ad? Dolore expedita autem neque aspernatur sed delectus fugit qui illo hic sit. Quae saepe possimus doloremque sit optio maiores voluptas quis cupiditate nisi ad numquam error, aliquam tempora unde alias architecto ratione iusto officia dolorum! Eos est mollitia corrupti molestias quidem ad dolorum ipsum minus, optio quaerat voluptas quae dignissimos ratione saepe facere tempore rerum at? Corrupti ad accusantium temporibus totam nesciunt incidunt ipsa sed unde velit omnis non doloribus nobis id, alias architecto facilis voluptatem obcaecati laudantium repellat sunt possimus ducimus! Quasi, vero corrupti officiis vel natus alias minima nostrum!</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default About;