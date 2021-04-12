import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


function ProjectPage() {
    return (
        <div>
            <h3>프로젝트 목록 : </h3>
            <ul>
                <li>
                    <Link to="/project/wilt">WILT</Link>
                </li>
                <li>
                    <Link to="/project/kiosk">Kiosk</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(ProjectPage)
