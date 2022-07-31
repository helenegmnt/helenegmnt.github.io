import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
    return <>
            <div className="skills">
            <h2 className="h2">Qualités</h2>
            <ul>
            <li>Rigoureuse</li>
            <li>Flexible </li>
            <li>Organisée</li>
            <li>Gestion du temps</li>
            <li>Esprit d'équipe</li>
            </ul>
        </div>
    <div className="skills">
        <h2 className="h2">Compétences</h2>
        < Skill title="HTML5" rating="4"/>
        < Skill title="CSS3" rating="2"/>
        < Skill title="JAVASCRIPT" rating="3"/>
        < Skill title="REACT" rating="3"/>
        < Skill title="NODE" rating="1"/>
        < Skill title="PHP" rating="3"/>
        < Skill title="SQL" rating="3"/>
        < Skill title="SYMFONY" rating="3"/>
        < Skill title="TWIG" rating="3"/>
        <div className="skills">
        <h2 className="h2 ">Outils</h2>
        < Skill title="MacOS" rating="3"/>
        < Skill title="Github" rating="2"/>
        < Skill title="Notion" rating="4"/>
        < Skill title="Kanban" rating="3"/>
        < Skill title="Miro" rating="3"/>
        </div>
    </div>
    <div className="skills">
        <h2 className="h2">Langues</h2>
        < Skill title="Anglais" rating="4"/>
    </div>
    <Interests />
    </>
}

export default Skills