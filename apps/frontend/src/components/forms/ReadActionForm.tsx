"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ActionWithRelations } from "@/lib/types";
import { Row } from "@tanstack/react-table";
import { Textarea } from "../ui/textarea";

type ReadActionFormProps = {
  row: Row<ActionWithRelations>;
};

export default function ReadActionForm({ row }: ReadActionFormProps) {
  const action = row.original;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue={action.name} readOnly disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Input id="type" defaultValue={action.type} readOnly disabled />
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="space-y-2">
          <Label htmlFor="retries">Retries</Label>
          <Input
            id="retries"
            defaultValue={action.retries ?? 0}
            readOnly
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="triggerLimit">Trigger Limit</Label>
          <Input
            id="triggerLimit"
            defaultValue={action.triggerLimit ?? 0}
            readOnly
            disabled
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div>
          <Label className="text-base">Active</Label>
          <span className="text-muted-foreground text-sm">
            Enable or disable this action.
          </span>
        </div>
        <Switch checked={action.active} disabled aria-disabled />
      </div>

      {action.emailAction && (
        <div className="space-y-2 border p-4 rounded-md">
          <h3 className="text-lg font-semibold">Email Details</h3>
          <div className="space-y-2">
            <Label htmlFor="receiverEmail">Receiver Email</Label>
            <Input
              id="receiverEmail"
              defaultValue={action.emailAction.receiverEmail}
              readOnly
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailContent">Content</Label>
            <Textarea
              className="resize-none"
              id="emailContent"
              defaultValue={action.emailAction.content}
              readOnly
              disabled
            />
          </div>
        </div>
      )}

      {action.telegramAction && (
        <div className="space-y-2 border p-4 rounded-md">
          <h3 className="text-lg font-semibold">Telegram Details</h3>
          <div className="space-y-2">
            <Label htmlFor="chatId">Chat ID</Label>
            <Input
              id="chatId"
              defaultValue={action.telegramAction?.chatId}
              readOnly
            />
          </div>
        </div>
      )}

      {action.webhookAction && (
        <div className="space-y-2 border p-4 rounded-md">
          <h3 className="text-lg font-semibold">Webhook Details</h3>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" defaultValue={action.webhookAction.url} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="payload">Payload</Label>
            <Input
              id="payload"
              defaultValue={action.webhookAction.payload}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
}
