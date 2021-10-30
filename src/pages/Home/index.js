import './styles.css';

import { Menu } from '../../components/Menu';
import { Introduction } from '../../components/Introduction'
import { Heading } from '../../components/Heading'
import { Footer } from '../../components/Footer'
import { SkillCard } from '../../components/SkillCard'
import { ProjectCard } from '../../components/ProjectCard'
import { ServiceCard } from '../../components/ServiceCard'

import skills from './skills'
import projects from './projects'
import services from './services'

export function Home() {
    return(
        <main className = "home">
            <header className="light-bg">
                <div className="container">
                    <Menu />
                </div>
            </header>

            <section className = "container section">
                <Introduction />
            </section>
            
            <section className="section light-bg">
                <Heading id="projects" lineBottom> 
                    Projects 
                </Heading>

                <div className="container projects__container">
                    {projects.map((item, index) =>(
                        <ProjectCard 
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>

            <section className="section">
                <Heading id="services" lineBottom> 
                    Services 
                </Heading>

                <div className="container services__container">
                    {services.map((item, index) =>{
                        const Icon = item.image;
                        return (
                            <ServiceCard 
                                key={index}
                                image={<Icon size={70} color="#FF0A54" />}
                                title = {item.title}
                                description = {item.description}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="section light-bg">
                <Heading id="skills" lineBottom> 
                    Skills 
                </Heading>

                <div className="container skills__container">
                    {skills.map((item, index) =>{
                        const Icon = item.image;
                        return (
                            <SkillCard 
                                key={index}
                                image={<Icon size={70} color="#FF0A54" />}
                                title = {item.title}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Footer />
                </div>
            </section>
        </main>
    );
}