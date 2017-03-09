import React from 'react'
import {Link} from 'react-router'
function MyLink(props) {
    return <Link {...props} activeClassName='active'/>
}

export default MyLink
