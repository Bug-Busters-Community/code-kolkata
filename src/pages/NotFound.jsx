import Button from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import event from "../config/event";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-[var(--nav-h)]">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-lines grid-fade opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-2 to-ink" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="shell py-24 text-center">
        <p className="font-pixel text-[clamp(3rem,14vw,8rem)] leading-none text-primary/20">404</p>
        <p className="eyebrow mt-4 justify-center">Signal lost</p>
        <h1 className="display-1 mx-auto mt-4 max-w-3xl text-text">This page respawned elsewhere.</h1>
        <p className="lede mx-auto mt-5 max-w-lg text-base">
          The link is broken or the page moved. Head back to {event.name} and pick a working route.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="primary">
            Back to home <Icon name="arrowRight" size={15} />
          </Button>
          <Button to="/register" variant="secondary">
            Register interest
          </Button>
        </div>
      </div>
    </section>
  );
}
