import React from 'react'

interface IRouteAbout { }

const RouteAbout: React.FC<IRouteAbout> = () => {
    return (
        <section className='min-h-screen'>
            <div className='container mx-auto'>
                <h1>Empty About Page</h1>
            </div>
        </section>
    )
}

export default RouteAbout;