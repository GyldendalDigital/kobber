<script lang="ts">
import {
  Card,
  CardMedia,
  CardMediaLayer,
  CardMediaWrapper,
  CardTextBody,
  CardTextTitle,
  CardTextWrapper,
} from "@gyldendal/kobber-components-poc/svelte/card";
import { ToggleButton } from "@gyldendal/kobber-components-poc/svelte/ToggleButton";
</script>

<ToggleButton>Custom machine</ToggleButton>

<br />
<br />



<br/>
<br/>

<Card>
    <CardMediaWrapper>
        <CardMedia>
            <!-- media -->
            <img alt="seksjonsteamet spiller shuffleboard" src="./shared/seksjonsteamet.png" />
        </CardMedia>
    </CardMediaWrapper>
    <CardTextWrapper>
        <CardTextTitle>Dette er en tittel</CardTextTitle>
        <p>mer tekst</p>
    </CardTextWrapper>
</Card>
