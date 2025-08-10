import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { HoverButton } from "./ui/hover-button";

const MDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  HoverButton,
};

interface MdxProps {
  code: string;
}

interface ExtendedMdxProps extends MdxProps {
  components: object;
}

export function MDXContent({ code }: ExtendedMdxProps) {
  const Component = MDXComponents(code);
  return <Component components={components} />;
}
