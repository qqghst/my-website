const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    // heading1: 'font-inter font-semibold text-[68.8px] tracking-[0.5px] leading-[120%] text-whiteOppacity max-w-4xl',
    paragraph: "font-inter font-medium text-[116px] text-whiteOppacity leading-[30.8px]",

    // h1: 'font-inter font-bold ss:text-[68.8px] text-[47.78px] text-whiteOppacity leading-[110%] tracking-[0.5px]',
    navlinks: "font-inter font-regular text-[16px] sm:text-whiteOppacity black",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;