import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface Props {
  type: "apply" | "complete";
}

export default function AlertModal({ trigger, text, onConfirm, open }) {
  return (
    <>
      <AlertDialog open={open}>
        {trigger && (
          <AlertDialogTrigger asChild>
            <Button variant="outline">{trigger}</Button>
          </AlertDialogTrigger>
        )}
        <AlertDialogContent className="sm:max-w-[425px] gab-2">
          <AlertDialogHeader className="mb-2">
            <AlertDialogDescription>{text}</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center justify-center gap-2">
            <AlertDialogCancel className="m-0">취소</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
