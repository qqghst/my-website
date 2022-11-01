import React from 'react'
import style from '../RouteProjects/RouteProjects.module.scss'

interface IRouteProjects { }

const RouteProjects: React.FC<IRouteProjects> = () => {
    return (
        <section className=''>
            {/* <div className='flex flex-col container mx-auto py-[160px] gap-[240px] flex-wrap'>
                <div className='flex flex-row justify-end items-end gap-[240px] flex-wrap '>
                    <a href="/" className={`bg-white h-[450px] w-[300px]`}>
                        <img className={`${style.image}`} src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                    </a>
                    <a href="/" className='bg-white h-[300px] w-[450px]' >
                    </a>
                </div>
                <div className='flex flex-row justify-start items-start gap-[240px] flex-wrap'>
                    <div className='bg-white h-[300px] w-[450px]' />
                    <div className='bg-white h-[450px] w-[300px]' />
                </div>
            </div> */}
            <div className={`${style.gallery}`}>
                <div className={`${style.gallery__column}`}>
                    <a href="https://unsplash.com/@jeka_fe" target="_blank" className={`${style.gallery__link}`}>
                        <figure className={`${style.gallery__thumb}`}>
                            <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className={`${style.gallery__image}`}/>
                                <figcaption className={`${style.gallery__caption}`}>Portrait by Jessica Felicio</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
        // <div className={`${style.grid} ${style.imageGrid}`}>
        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg1}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg2}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg3}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg4}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg5}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg6}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg7}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg8}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg9}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        //     <div className={`${style.gridBlock}`}>
        //         <div className={`${style.tile}`}>
        //             <a className={`${style.tileLink}`} href="#">
        //                 <img className={`${style.tileImg} ${style.tileImg10}`} src="https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no" alt="Image"/>
        //             </a>
        //         </div>
        //     </div>

        // </div>
    )
}

export default RouteProjects