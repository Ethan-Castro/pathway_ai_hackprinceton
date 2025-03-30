import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ElevenLabsTalkLinkProps {
  agentId: string
  audienceType: "elderly" | "college" | "neurodivergent" | "immigrants"
}

export default function ElevenLabsTalkLink({ agentId, audienceType }: ElevenLabsTalkLinkProps) {
  // Get audience-specific styles
  const getStyles = () => {
    switch (audienceType) {
      case "elderly":
        return {
          bgColor: "bg-blue-50 dark:bg-blue-950/30",
          textColor: "text-blue-800 dark:text-blue-300",
          buttonBg: "bg-blue-600 hover:bg-blue-700",
        }
      case "college":
        return {
          bgColor: "bg-purple-50 dark:bg-purple-950/30",
          textColor: "text-purple-800 dark:text-purple-300",
          buttonBg: "bg-purple-600 hover:bg-purple-700",
        }
      case "neurodivergent":
        return {
          bgColor: "bg-teal-50 dark:bg-teal-950/30",
          textColor: "text-teal-800 dark:text-teal-300",
          buttonBg: "bg-teal-600 hover:bg-teal-700",
        }
      case "immigrants":
        return {
          bgColor: "bg-amber-50 dark:bg-amber-950/30",
          textColor: "text-amber-800 dark:text-amber-300",
          buttonBg: "bg-amber-600 hover:bg-amber-700",
        }
    }
  }

  const styles = getStyles()

  return (
    <section className={`py-12 ${styles.bgColor} border-t`}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${styles.textColor}`}>Talk to Our AI Assistant</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            Want to have a more natural conversation? Try our voice-enabled AI assistant.
          </p>
          <Link
            href={`https://elevenlabs.io/app/talk-to?agent_id=${agentId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className={`text-white ${styles.buttonBg}`}>
              Talk to AI Assistant
            </Button>
          </Link>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Powered by ElevenLabs ConversationalAI</div>
        </div>
      </div>
    </section>
  )
}

