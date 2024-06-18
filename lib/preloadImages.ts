// utils/preloadImages.ts
export const preloadImages = async (imageUrls: string[]): Promise<void> => {
    const promises = imageUrls.map((url) => {
        return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => reject();
        });
    });

    try {
        await Promise.all(promises);
        console.log('All images preloaded');
    } catch (error) {
        console.error('Error preloading images', error);
    }
};
