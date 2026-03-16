export type TiltedCardProps = {
    coverImage: string,
    altText?: string,
    captionText?: string,
    containerHeight?: string,
    containerWidth?: string,
    imageHeight?: string,
    imageWidth?: string,
    scaleOnHover?: number,
    rotateAmplitude?: number,
    showMobileWarning?: boolean,
    showTooltip?: boolean,
    overlayContent?: React.ReactNode,
    displayOverlayContent?: boolean,
    onClick?: React.MouseEventHandler<HTMLElement>;
    
}