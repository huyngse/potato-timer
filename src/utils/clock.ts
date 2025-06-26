import { CurrentTime } from "../types/clock";
import MorningBackground from "../assets/background-morning.jpg";
import AfternoonBackground from "../assets/background-afternoon.jpg";
import EveningBackground from "../assets/background-evening.jpg";
import NightBackground from "../assets/background-night.jpg";
import BellSound from "../assets/elevator-bell.mp3";

// Utility: Format seconds to MM:SS
export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
};

// Utility: Play bell sound
export const playSoundEffect = () => {
    const audio = new Audio(BellSound);
    audio.play();
};

// Utility: Show browser notification
export const showNotification = () => {
    if (Notification.permission === "granted") {
        new Notification("PotatoTimer", {
            body: "Your time is up!",
        });
    }
};

// Determine current part of the day
export const getTimeOfDay = (): CurrentTime => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 20) return "evening";
    return "night";
};

// Map time of day to background
export const getBackground = (timeOfDay: CurrentTime) => {
    return {
        morning: MorningBackground,
        afternoon: AfternoonBackground,
        evening: EveningBackground,
        night: NightBackground,
    }[timeOfDay];
};