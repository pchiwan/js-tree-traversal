export function narrate(verbose: boolean, message: string) {
  if (verbose) {
    console.log(message);
  }
}

export default {
  narrate
}