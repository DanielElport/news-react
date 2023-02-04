import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
    const [showHeader, setShowHeader] = React.useState(true)

    const onScroll = () => {}

    React.useEffect(() => {
        const handler = () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                setShowHeader(false)
            } else {
                setShowHeader(true)
            }
            console.log(showHeader)
        }

        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    })

    return (
        <>
            <div className="fixed-header position-fixed">
                <div className={'container header-container p-0 '}>
                    <div
                        className={
                            'jumbotron header-title mb-0 px-3 pb-1 pt-2 pb-sm-2 pt-sm-3' +
                            (showHeader ? '' : ' small')
                        }
                    >
                        <Link to="/">
                            <h2 className="page-title">
                                <i
                                    style={{ fontSize: '110%' }}
                                    className="fa fa-globe mr-3"
                                />
                                Code Smart News
                            </h2>
                        </Link>
                    </div>
                    <NavBar />
                </div>
            </div>
        </>
    )
}

export default withRouter(Header)
