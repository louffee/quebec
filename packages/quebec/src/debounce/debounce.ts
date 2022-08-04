import type DebounceFunction from "./DebounceFunction";

let debounceTimer: NodeJS.Timeout | number | undefined;

function debounce(callback: DebounceFunction, time: number) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
}

export default debounce;
