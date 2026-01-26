cn("bg-blue-600", undefined, false, "text-white"); 
// Returns: "bg-blue-600 text-white"
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}