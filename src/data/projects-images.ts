import Academia from "./projectss/Academia.png";
import CineDol from "./projectss/CineDol.png";

export const PROJECT_IMAGES = [Academia, CineDol];

// Map project titles to images. Use exact title matching — leave undefined for projects without a matching image.
export const PROJECT_IMAGE_MAP: Record<string, string> = {
	"Academia – E-Learning Platform": Academia,
	"CineDol": CineDol,
};
