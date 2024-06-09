import React from 'react'
import Image from "next/image";
import htmllogo from '../../../public/vscode-icons_file-type-html.jpg'
import jslogo from '../../../public/vscode-icons_file-type-js-official.jpg'
import reactlogo from '../../../public/logos_react.jpg'
import boostraplogo from '../../../public/logos_bootstrap.jpg'
import html5logo from '../../../public/vscode-icons_file-type-css.jpg'
import githublogo from '../../../public/github.jpg'
import vscodelogo from '../../../public/vscode-icons_file-type-vscode.jpg'
import gitlogo from '../../../public/logos_git-icon.jpg'



function Tech() {
    return (
        <div className="tech pt-10 pb-10" id="tech">
            <div className="tech--text font-poppins text-customColor">
                <h1 className="text-4xl font-bold">My Tech Stack</h1>
                <p className="text-2xl">Technologies I’ve been working with recently</p>
            </div>
            <div className="grid  gap-y-5 grid-cols-4 place-items-center">
                <div><Image src={htmllogo} className="h-20 w-auto" alt="HTML" /></div>
                <div><Image src={reactlogo} className="h-20 w-auto" alt="React" /></div>
                <div><Image src={jslogo} className="h-20 w-auto" alt="Bootstrap" /></div>
                <div><Image src={boostraplogo} className="h-20 w-auto" alt="Bootstrap" /></div>
                <div><Image src={vscodelogo} className="h-20 w-auto" alt="VSCode" /></div>
                <div><Image src={githublogo} className="h-20 w-auto" alt="GitHub" /></div>
                <div><Image src={html5logo} className="h-20 w-auto" alt="HTML5" /></div>
                <div><Image src={gitlogo} className="h-20 w-auto" alt="Git" /></div>
            </div>



        </div>
    )
}

export default Tech
