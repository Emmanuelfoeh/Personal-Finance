import { useDark, useToggle } from "@vueuse/core";
export const isDark = useDark({
  selector: "html"
});

export const toggleDark = useToggle(isDark);
