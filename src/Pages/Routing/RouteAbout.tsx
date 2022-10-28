import React from 'react'

interface IRouteAbout { }

const RouteAbout: React.FC<IRouteAbout> = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center'>
            <div className='container mx-auto'>
                <h1 className='text-whiteOppacity text-7xl font-bold '>Empty About Page.tsx</h1>
            </div>
        </section>
    )
}

export default RouteAbout;