export default function EmptyMemories() {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="w-[38ch] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a href="/memories/new" className="underline hover:text-gray-50">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
