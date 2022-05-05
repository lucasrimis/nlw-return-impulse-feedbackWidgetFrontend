import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../images/bug.svg'
import ideaImageUrl from '../../images/idea.svg'
import thoughtImageUrl from '../../images/thought.svg'
import { useState } from "react";
import { FeebackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de um lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};

export type FeebackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeebackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        !feedbackType ? (
          <FeebackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <FeedbackContentStep 
            feedbackType={ feedbackType }
            onFeedbackRestartRequested={ handleRestartFeedback }
          />
        )
      }
      
      <footer>
        Feito por <a className="underline underline-offset-2" href='https://www.linkedin.com/in/lucasrimis/'>Lucas Rimis</a>
      </footer>
    </div>
  );
}