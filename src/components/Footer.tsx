import { LogoFooter } from "../components/LogoFooter"

export function Footer() {
  return (
    <div className="py-5 px-5 flex flex-1 items-center justify-left bg-gray-700 border-b border-gray-600">
      <LogoFooter />
      <div className="px-5 flex w-full justify-between">
        <p className="px-5">Rocketseat - Todos os direitos reservados</p>
        <p className="justify-right">Políticas de privacidade</p>
      </div>
    </div>
  )
}